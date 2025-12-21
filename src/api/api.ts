import githubData from "../data/github.json";

// GitHub------------------------------------------------------------------------
export async function fetchGitHub(): Promise<{
    profile: Profile;
    repos: Repository[];
    issues: Issue[];
    pullRequests: PullRequest[];
}> {
    const username = "choi-hyk";

    const fallback = {
        profile: githubData.profile as Profile,
        repos: (githubData.repositories || []) as Repository[],
        issues: (githubData.issues || []) as Issue[],
        pullRequests: (githubData.pullRequests || []) as PullRequest[],
    };

    try {
        const profileResponse = await fetch(
            `https://api.github.com/users/${username}`,
        );
        if (!profileResponse.ok) {
            throw new Error("Failed to fetch GitHub profile");
        }
        const profileData = (await profileResponse.json()) as Profile;

        const reposResponse = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
        );
        if (!reposResponse.ok) {
            throw new Error("Failed to fetch GitHub repositories");
        }
        const reposData = (await reposResponse.json()) as Repository[];

        return {
            profile: profileData,
            repos: reposData,
            issues: [],
            pullRequests: [],
        };
    } catch {
        return fallback;
    }
}

export interface Profile {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company: string | null;
    location: string | null;
    public_repos: number;
    followers: number;
    following: number;
}

export interface Repository {
    id: number;
    name: string;
    html_url: string;
    open_issues_count: number;
}

export interface Issue {
    id: number;
    number: number;
    title: string;
    html_url: string;
    repoName: string;
}

export interface PullRequest {
    id: number;
    number: number;
    title: string;
    html_url: string;
    repoName: string;
    state: string;
}

// Velog----------------------------------------------------------------------------
const VELOG_REPO = "choi-hyk/Velog";

function prettifyTitle(filename: string) {
    return filename
        .replace(/\.md$/i, "")
        .replace(/[-_]+/g, " ")
        .trim();
}

function getTagFromPath(path: string) {
    const parts = path.split("/");
    if (parts.length > 1) {
        return parts[0];
    }
    return "기타";
}

export async function fetchVelog(): Promise<Post[]> {
    const repoResponse = await fetch(
        `https://api.github.com/repos/${VELOG_REPO}`,
    );
    if (!repoResponse.ok) {
        throw new Error("Failed to fetch Velog repo info");
    }
    const repoData = (await repoResponse.json()) as {
        default_branch: string;
    };
    const branch = repoData.default_branch || "main";

    const treeResponse = await fetch(
        `https://api.github.com/repos/${VELOG_REPO}/git/trees/${branch}?recursive=1`,
    );
    if (!treeResponse.ok) {
        throw new Error("Failed to fetch Velog repo tree");
    }
    const treeData = (await treeResponse.json()) as {
        tree: { path: string; type: string; sha: string }[];
    };

    const markdownFiles = treeData.tree.filter(
        (item) =>
            item.type === "blob" &&
            item.path.endsWith(".md") &&
            item.path.toLowerCase() !== "readme.md",
    );

    const posts = await Promise.all(
        markdownFiles.map(async (file) => {
            const rawUrl = `https://raw.githubusercontent.com/${VELOG_REPO}/${branch}/${file.path}`;
            const markdown = await fetch(rawUrl).then((res) => res.text());
            const tag = getTagFromPath(file.path);

            return {
                id: file.sha,
                tag,
                tags: [tag],
                title: prettifyTitle(file.path.split("/").pop() || file.path),
                link: `https://github.com/${VELOG_REPO}/blob/${branch}/${file.path}`,
                pubDate: new Date().toISOString(),
                description: markdown,
            };
        }),
    );

    return posts;
}

export interface Post {
    id: string;
    tag?: string;
    tags?: string[];
    title: string;
    link: string;
    pubDate: string;
    description: string;
}
