import { useState, useEffect } from "react";
import {
    DivAvatar,
    DivComapny,
    DivFollowers,
    DivFollowing,
    DivLocation,
    DivLogin,
    DivName,
    DivProfileContainer,
    DivProfileInnerContainer,
    DivRepositoriesContainer,
    DivRepoList,
    DivRepoItem,
    DivRepoName,
    DivRepoStats,
    DivRepoDetails,
    DivSectionTitle,
    DivListItem,
} from "./GitHub.styles";
import { Profile, Repository, Issue, PullRequest } from "../../api/api";

interface GitHubProfileProps {
    profile: Profile | null;
}

function GitHubProfile({ profile }: GitHubProfileProps) {
    if (!profile) {
        return (
            <DivProfileContainer>
                <div>프로필 정보를 불러올 수 없습니다.</div>
            </DivProfileContainer>
        );
    }
    return (
        <DivProfileContainer>
            <DivAvatar>
                <img src={profile.avatar_url} alt={profile.login} />
            </DivAvatar>
            <DivProfileInnerContainer>
                <DivName>
                    👤 {profile.name || "이름 없음"}
                    <DivLogin>
                        (
                        <a
                            href={profile.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {profile.login}
                        </a>
                        )
                    </DivLogin>
                </DivName>
                {profile.company && (
                    <DivComapny>🏢 {profile.company}</DivComapny>
                )}
                {profile.location && (
                    <DivLocation>📍 {profile.location}</DivLocation>
                )}
                <DivFollowers>
                    😘 {profile.followers} followers,
                    <DivFollowing> {profile.following} following</DivFollowing>
                </DivFollowers>
            </DivProfileInnerContainer>
        </DivProfileContainer>
    );
}

interface GithubRepositoriesProps {
    repositories?: Repository[];
    issues?: Issue[];
    pullRequests?: PullRequest[];
}

function GithubRepositories({
    repositories = [],
    issues = [],
    pullRequests = [],
}: GithubRepositoriesProps) {
    const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);

    // 렌더링 시 첫 번째 저장소 자동 선택
    useEffect(() => {
        if (repositories.length > 0 && !selectedRepo) {
            setSelectedRepo(repositories[0]);
        }
    }, [repositories, selectedRepo]);

    const selectedRepoIssues = selectedRepo
        ? issues.filter((i) => i.repoName === selectedRepo.name)
        : [];

    const selectedRepoPRs = selectedRepo
        ? pullRequests.filter((pr) => pr.repoName === selectedRepo.name)
        : [];

    return (
        <DivRepositoriesContainer>
            <DivRepoList>
                <h3>📁 저장소 목록 ({repositories.length}개)</h3>
                {repositories.map((repo) => (
                    <DivRepoItem
                        key={repo.id}
                        onClick={() => setSelectedRepo(repo)}
                        style={{
                            cursor: "pointer",
                            backgroundColor:
                                selectedRepo?.id === repo.id
                                    ? "#f0f0f0"
                                    : "transparent",
                        }}
                    >
                        <DivRepoName>{repo.name}</DivRepoName>
                        <DivRepoStats>
                            🔥 Issues: {repo.open_issues_count}
                        </DivRepoStats>
                    </DivRepoItem>
                ))}
            </DivRepoList>

            <DivRepoDetails>
                {selectedRepo ? (
                    <>
                        <h2>📂 {selectedRepo.name}</h2>
                        <p>
                            <a
                                href={`https://github.com/${selectedRepo.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                🔗 GitHub에서 보기
                            </a>
                        </p>

                        <DivSectionTitle>
                            🐛 Issues ({selectedRepoIssues.length}개)
                        </DivSectionTitle>
                        {selectedRepoIssues.length > 0 ? (
                            selectedRepoIssues.map((issue) => (
                                <DivListItem key={issue.id}>
                                    <a
                                        href={issue.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        #{issue.number} {issue.title}
                                    </a>
                                </DivListItem>
                            ))
                        ) : (
                            <div>이슈가 없습니다.</div>
                        )}

                        <DivSectionTitle>
                            🔄 Pull Requests ({selectedRepoPRs.length}개)
                        </DivSectionTitle>
                        {selectedRepoPRs.length > 0 ? (
                            selectedRepoPRs.map((pr) => (
                                <DivListItem key={pr.id}>
                                    <a
                                        href={pr.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        #{pr.number} {pr.title}
                                        <span
                                            style={{
                                                color:
                                                    pr.state === "open"
                                                        ? "green"
                                                        : "orange",
                                                marginLeft: "8px",
                                            }}
                                        >
                                            ({pr.state})
                                        </span>
                                    </a>
                                </DivListItem>
                            ))
                        ) : (
                            <div>Pull Request가 없습니다.</div>
                        )}
                    </>
                ) : (
                    <div>
                        <h3>📋 저장소를 선택하세요</h3>
                        <p>
                            왼쪽의 저장소를 클릭하여 이슈와 Pull Request를
                            확인하세요.
                        </p>
                    </div>
                )}
            </DivRepoDetails>
        </DivRepositoriesContainer>
    );
}

export { GitHubProfile, GithubRepositories };
