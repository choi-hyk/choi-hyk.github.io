import { MarkdownRenderer } from "../../components/markdown/MarkDown";
import { GitHubProfile } from "../../components/github/GitHub";
import { DivCenteredWrapper } from "./GitHub.styles";
import { useGitHub } from "../../useApi";

function GitHub() {
    const { data, error, isLoading } = useGitHub();

    if (error) return null;
    if (isLoading) return null;
    if (!data) return null;
    const { profile } = data;

    return (
        <>
            <MarkdownRenderer page="github" />
            <DivCenteredWrapper>
                <GitHubProfile profile={profile} />
            </DivCenteredWrapper>
        </>
    );
}

export default GitHub;
