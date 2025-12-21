import { useGitHub } from "../../api/useApi";
import {
    GitHubContainer,
    GitHubCard,
    ProfileSection,
    AvatarContainer,
    ProfileName,
    ProfileUsername,
    ProfileInfo,
    InfoItem,
    RepositoriesSection,
    SectionTitle,
    RepoGrid,
    RepoCard,
    RepoName,
    RepoStats,
    EmptyState,
} from "./GitHub.styles";
import {
    RiBuildingLine,
    RiFireLine,
    RiGroupLine,
    RiMapPinLine,
} from "react-icons/ri";

function GitHub() {
    const { data, error, isLoading } = useGitHub();

    if (isLoading) {
        return (
            <GitHubContainer>
                <GitHubCard>
                    <EmptyState>Loading GitHub data...</EmptyState>
                </GitHubCard>
            </GitHubContainer>
        );
    }

    if (error || !data) {
        return (
            <GitHubContainer>
                <GitHubCard>
                    <EmptyState>Failed to load GitHub data</EmptyState>
                </GitHubCard>
            </GitHubContainer>
        );
    }

    const { profile, repos } = data;

    return (
        <GitHubContainer>
            <GitHubCard>
                {profile && (
                    <ProfileSection>
                        <AvatarContainer>
                            <img
                                src={profile.avatar_url}
                                alt={profile.login}
                            />
                        </AvatarContainer>
                        <ProfileName>{profile.name || profile.login}</ProfileName>
                        <ProfileUsername
                            href={profile.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @{profile.login}
                        </ProfileUsername>
                        <ProfileInfo>
                            {profile.location && (
                                <InfoItem>
                                    <RiMapPinLine />
                                    <span>{profile.location}</span>
                                </InfoItem>
                            )}
                            {profile.company && (
                                <InfoItem>
                                    <RiBuildingLine />
                                    <span>{profile.company}</span>
                                </InfoItem>
                            )}
                            <InfoItem>
                                <RiGroupLine />
                                <span>
                                    {profile.followers} followers ·{" "}
                                    {profile.following} following
                                </span>
                            </InfoItem>
                        </ProfileInfo>
                    </ProfileSection>
                )}

                <RepositoriesSection>
                    <SectionTitle>Repositories</SectionTitle>
                    {repos && repos.length > 0 ? (
                        <RepoGrid>
                            {repos.map((repo) => (
                                <RepoCard
                                    key={repo.id}
                                    onClick={() =>
                                        window.open(
                                            repo.html_url,
                                            "_blank",
                                            "noopener,noreferrer",
                                        )
                                    }
                                >
                                    <RepoName>{repo.name}</RepoName>
                                    <RepoStats>
                                        <span>
                                            <RiFireLine /> {repo.open_issues_count} issues
                                        </span>
                                    </RepoStats>
                                </RepoCard>
                            ))}
                        </RepoGrid>
                    ) : (
                        <EmptyState>No repositories found</EmptyState>
                    )}
                </RepositoriesSection>
            </GitHubCard>
        </GitHubContainer>
    );
}

export default GitHub;
