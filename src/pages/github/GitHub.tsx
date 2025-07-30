import { useEffect, useState } from "react";
import { fetchGitHub } from "../../api";
import { MarkdownRenderer } from "../../components/markdown/MarkDown";
import { GitHubProfile } from "../../components/github/GitHub";
import { Profile } from "../../api";
import { DivCenteredWrapper } from "./GitHub.styles";

function GitHub() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetchGitHub().then((data) => {
            const { profile, repos } = data;
            setProfile(profile);
            setRepos(repos);
        });
    }, []);

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
