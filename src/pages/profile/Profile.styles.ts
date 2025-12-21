import styled from "styled-components";

export const ProfileContainer = styled.div`
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

export const ProfileCard = styled.div`
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(90, 220, 190, 0.5);
    border-radius: 1.5rem; /* 24px */
    padding: 3rem;
    max-width: 37.5rem; /* 600px */
    width: 100%;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: var(--shadow-xl);
        border-color: rgb(90, 220, 190);
    }
`;

export const ProfileHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.5rem;
`;

export const ProfileTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 0.5rem;
    text-align: center;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
`;

export const TitleIcon = styled.span`
    display: inline-flex;
    align-items: center;
    font-size: 1.5rem;
    color: var(--accent-color);
`;

export const SubtitleRow = styled.p`
    font-size: 1rem;
    color: var(--text-secondary);
    text-align: center;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
`;


export const ProfileSection = styled.div`
    margin-bottom: 2rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const InlineIconImage = styled.img`
    width: 1.2rem;
    height: 1.2rem;
    object-fit: contain;
    display: inline-block;
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    color: var(--text-secondary);

    &:last-child {
        margin-bottom: 0;
    }
`;

export const InfoLabel = styled.span`
    font-weight: 600;
    color: var(--text-color);
    min-width: 5rem; /* 80px */
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
`;

export const InfoValue = styled.span`
    color: var(--text-secondary);
`;

export const LinkContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
`;

export const LinkButton = styled.a<{ $tone?: string }>`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: ${({ $tone }) =>
        $tone ? `rgba(${$tone}, 0.12)` : "var(--glass-bg)"};
    border: 1px solid
        ${({ $tone }) =>
            $tone ? `rgba(${$tone}, 0.45)` : "var(--glass-border)"};
    border-radius: 0.75rem; /* 12px */
    color: ${({ $tone }) =>
        $tone ? `rgb(${$tone})` : "var(--accent-color)"};
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        background: ${({ $tone }) =>
            $tone ? `rgb(${$tone})` : "var(--accent-color)"};
        color: ${({ $tone }) =>
            $tone ? "var(--primary-color)" : "var(--text-color)"};
        border-color: ${({ $tone }) =>
            $tone ? `rgb(${$tone})` : "var(--accent-color)"};
        transform: translateY(-0.125rem); /* -2px */
        box-shadow: var(--shadow-md);
    }
`;

export const StackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.5rem;
`;

export const StackBadge = styled.span<{ $tone?: string }>`
    padding: 0.5rem 1rem;
    background: ${({ $tone }) =>
        $tone ? `rgba(${$tone}, 0.14)` : "var(--glass-bg)"};
    border: 1px solid
        ${({ $tone }) =>
            $tone ? `rgba(${$tone}, 0.45)` : "var(--glass-border)"};
    border-radius: 0.5rem; /* 8px */
    font-size: 0.85rem;
    color: ${({ $tone }) =>
        $tone ? `rgb(${$tone})` : "var(--text-secondary)"};
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
        border-color: ${({ $tone }) =>
            $tone ? `rgb(${$tone})` : "var(--accent-color)"};
        color: ${({ $tone }) =>
            $tone ? `rgb(${$tone})` : "var(--accent-color)"};
        transform: translateY(-0.125rem); /* -2px */
    }
`;

export const Divider = styled.hr`
    border: none;
    border-top: 1px solid var(--glass-border);
    margin: 2rem 0;
`;
