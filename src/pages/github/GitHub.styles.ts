import styled from "styled-components";

export const GitHubContainer = styled.div`
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
            transform: translateY(1.25rem); /* 20px */
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const GitHubCard = styled.div`
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(150, 170, 255, 0.5);
    border-radius: 1.5rem; /* 24px */
    padding: 3rem;
    max-width: 56.25rem; /* 900px */
    width: 100%;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: var(--shadow-xl);
        border-color: rgb(150, 170, 255);
    }
`;

export const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--glass-border);
`;

export const AvatarContainer = styled.div`
    width: 7.5rem; /* 120px */
    height: 7.5rem; /* 120px */
    border-radius: 50%;
    overflow: hidden;
    border: 0.1875rem solid var(--accent-color); /* 3px */
    box-shadow: var(--shadow-glow);
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ProfileName = styled.h2`
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 0.5rem;
    text-align: center;
`;

export const ProfileUsername = styled.a`
    font-size: 1rem;
    color: var(--accent-color);
    text-decoration: none;
    margin-bottom: 1rem;
    transition: color 0.3s ease;

    &:hover {
        color: var(--accent-hover);
        text-decoration: underline;
    }
`;

export const ProfileInfo = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 0.9rem;
    color: var(--text-secondary);
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.35rem 0.6rem;
    border-radius: 0.5rem; /* 8px */
    border: 1px solid rgba(150, 170, 255, 0.25);
    background: rgba(150, 170, 255, 0.06);
    transition: all 0.3s ease;

    &:hover {
        background: rgba(150, 170, 255, 0.12);
        border-color: rgba(150, 170, 255, 0.45);
        color: rgb(150, 170, 255);
        transform: translateY(-0.0625rem); /* -1px */
    }
`;

export const RepositoriesSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const SectionTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 1.5rem;
    text-align: center;
`;

export const RepoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
`;

export const RepoCard = styled.div`
    background: rgba(150, 170, 255, 0.12);
    border: 1px solid rgba(150, 170, 255, 0.45);
    border-radius: 1rem; /* 16px */
    padding: 1.15rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        background: rgb(150, 170, 255);
        border-color: rgb(150, 170, 255);
        transform: translateY(-0.125rem); /* -2px */
        box-shadow: var(--shadow-md);
    }
`;

export const RepoName = styled.h4`
    font-size: 1.15rem;
    font-weight: 700;
    color: rgb(150, 170, 255);
    margin-bottom: 0.75rem;
    overflow-wrap: anywhere;
    word-break: break-word;

    ${RepoCard}:hover & {
        color: var(--primary-color);
    }
`;

export const RepoStats = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: rgba(150, 170, 255, 0.75);

    ${RepoCard}:hover & {
        color: var(--primary-color);
    }
`;

export const EmptyState = styled.div`
    text-align: center;
    padding: 3rem;
    color: var(--text-secondary);
    font-size: 0.95rem;
`;
