import styled from "styled-components";
import { useHippoboxReadme } from "../../api/useApi";
import { MarkDownPostRenderer } from "../../components/markdown/MarkDown";
import type { Post } from "../../api/api";

const HIPPOBOX_URL = "https://github.com/HippoBox/hippobox";

const placeholderPost: Post = {
    id: "hippobox-readme",
    title: "HippoBox README",
    link: HIPPOBOX_URL,
    pubDate: "1970-01-01T00:00:00.000Z",
    description: "",
};

function Hippobox() {
    const { data, error, isLoading } = useHippoboxReadme();

    return (
        <HippoboxContainer>
            <HippoboxCard>
                <CardActionRow>
                    <GitHubButton
                        href={HIPPOBOX_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open on GitHub
                    </GitHubButton>
                </CardActionRow>
                {isLoading && <StatusCard>Loading HippoBox README...</StatusCard>}
                {!isLoading && (error || !data) && (
                    <StatusCard>Failed to load HippoBox README</StatusCard>
                )}
                {!isLoading && !error && data && (
                    <PageWrapper>
                        <MarkDownPostRenderer post={placeholderPost} markdown={data} />
                    </PageWrapper>
                )}
            </HippoboxCard>
        </HippoboxContainer>
    );
}

export default Hippobox;

const HippoboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
    padding: 2rem;
    animation: fadeIn 0.5s ease-in;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(1.25rem);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const HippoboxCard = styled.div`
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(59, 130, 246, 0.45);
    border-radius: 1.5rem;
    padding: 1.5rem;
    max-width: 70rem;
    width: 100%;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: var(--shadow-xl);
        border-color: rgba(59, 130, 246, 0.75);
    }
`;

const CardActionRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const GitHubButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.9rem;
    border-radius: 0.6rem;
    border: 1px solid rgba(59, 130, 246, 0.45);
    background: rgba(59, 130, 246, 0.1);
    color: rgb(59, 130, 246);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.25s ease;

    &:hover {
        background: rgba(59, 130, 246, 0.2);
        border-color: rgba(59, 130, 246, 0.8);
        transform: translateY(-0.125rem);
        box-shadow: var(--shadow-md);
    }
`;

const PageWrapper = styled.div`
    width: 100%;
`;

const StatusCard = styled.div`
    margin: 2rem auto;
    max-width: 45rem;
    padding: 1rem 1.25rem;
    border-radius: 0.75rem;
    border: 1px solid rgba(59, 130, 246, 0.35);
    background: rgba(59, 130, 246, 0.08);
    color: var(--text-secondary);
    text-align: center;
`;
