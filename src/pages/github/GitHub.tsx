import { MarkdownRenderer } from "../../components/markdown/MarkDown";
import {
    GitHubProfile,
    GithubRepositories,
} from "../../components/github/GitHub";
import { DivCenteredWrapper } from "./GitHub.styles";
import { useGitHub } from "../../api/useApi";
import { useState } from "react";
import LoadingSpinner from "../../components/loading/LoadingSpinner";

function GitHub() {
    const { data, error, isLoading } = useGitHub();
    const [markdownLoaded, setMarkdownLoaded] = useState(false);

    // 로딩 중일 때 스피너 표시
    if (isLoading) {
        return <LoadingSpinner page="github" />;
    }

    if (error) {
        return null;
    }

    if (!data) {
        return null;
    }

    const { profile, repos, issues, pullRequests } = data;

    return (
        <>
            <MarkdownRenderer
                page="github"
                onLoad={() => setMarkdownLoaded(true)}
            />

            {markdownLoaded && (
                <DivCenteredWrapper>
                    <GitHubProfile profile={profile} />
                    <GithubRepositories
                        repositories={repos}
                        issues={issues}
                        pullRequests={pullRequests}
                    />
                </DivCenteredWrapper>
            )}
        </>
    );
}

export default GitHub;
