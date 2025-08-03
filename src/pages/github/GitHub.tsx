import { MarkdownRenderer } from "../../components/markdown/MarkDown";
import { GitHubProfile } from "../../components/github/GitHub";
import { DivCenteredWrapper } from "./GitHub.styles";
import { useGitHub } from "../../api/useApi";
import { useState } from "react";

function GitHub() {
    const { data, error, isLoading } = useGitHub();
    const [markdownLoaded, setMarkdownLoaded] = useState(false);

    if (error) return null;

    return (
        <>
            <MarkdownRenderer
                page="github"
                onLoad={() => setMarkdownLoaded(true)}
            />

            {!isLoading && data && markdownLoaded && (
                <DivCenteredWrapper>
                    <GitHubProfile profile={data.profile} />
                </DivCenteredWrapper>
            )}
        </>
    );
}

export default GitHub;
