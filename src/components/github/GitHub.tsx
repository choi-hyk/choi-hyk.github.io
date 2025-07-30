import {
    DivAvatar,
    DivComapny,
    DivFollowers,
    DivFollowing,
    DivHtml,
    DivLocation,
    DivLogin,
    DivName,
    DivProfileContainer,
    DivProfileInnerContainer,
} from "./GItHub.styles";
import { Profile } from "../../api";

interface GitHubProfileProps {
    profile: Profile | null;
}

function GitHubProfile({ profile }: GitHubProfileProps) {
    if (!profile) {
        return null;
    }
    return (
        <DivProfileContainer>
            <DivAvatar>
                <img src={profile.avatar_url} alt={profile.login} />
            </DivAvatar>
            <DivProfileInnerContainer>
                <DivName>
                    👤 {profile.name}
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
                <DivComapny>🏢 {profile.company}</DivComapny>
                <DivLocation>📍 {profile.location}</DivLocation>
                <DivFollowers>
                    😘 {profile.followers} followers,
                    <DivFollowing> {profile.following} following</DivFollowing>
                </DivFollowers>
            </DivProfileInnerContainer>
        </DivProfileContainer>
    );
}

export { GitHubProfile };
