import styled from "styled-components";

export const DivVelogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem; /* 24px */
    padding: 1.5rem; /* 24px */
    align-items: center;
`;

export const StatusCard = styled.div`
    width: 100%;
    max-width: 50rem; /* 800px */
    padding: 2rem;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 1rem; /* 16px */
    text-align: center;
    color: var(--text-secondary);
    box-shadow: var(--shadow-lg);
`;

export const DivPostWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem; /* 16px */

    width: 100%;
    max-width: 50rem; /* 800px */
`;

export const DivTagContainer = styled.div`
    display: flex;
    gap: 0.5rem; /* 8px */
    padding: 0.5rem 0;
    flex-wrap: nowrap;
    margin: 0 auto 1rem;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    max-width: 50rem; /* 800px */
    padding-bottom: 0.25rem;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`;

interface ButtonTagProps {
    $active: boolean;
}

export const ButtonTag = styled.button<ButtonTagProps>`
    padding: 0.5rem 0.75rem; /* 8px 12px */
    min-width: 5.5rem; /* 88px */
    width: fit-content;
    height: 2.25rem; /* 36px */
    flex: 0 0 auto;
    background: ${({ $active }) =>
        $active
            ? "linear-gradient(135deg, var(--accent-color) 0%, var(--tertiary-text-color) 100%)"
            : "var(--glass-bg)"};
    color: ${({ $active }) => ($active ? "var(--text-color)" : "var(--text-secondary)")};
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    justify-content: center;
    white-space: nowrap;
    border: 1px solid ${({ $active }) => ($active ? "var(--accent-color)" : "var(--glass-border)")};
    border-radius: 0.5rem; /* 8px */
    cursor: pointer;
    transition: background 0.3s ease, border-color 0.3s ease,
        color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: var(--shadow-sm);

    &:hover {
        background: ${({ $active }) =>
            $active
                ? "linear-gradient(135deg, var(--accent-hover) 0%, var(--tertiary-text-color) 100%)"
                : "var(--secondary-color)"};
        transform: translateY(-0.125rem); /* -2px */
        box-shadow: var(--shadow-md);
        border-color: var(--accent-color);
    }
`;

export const DivPostInit = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 7.5rem; /* 120px */
    flex-shrink: 0;
    transition: transform 0.3s ease;
    border: 1px solid rgba(60, 214, 180, 0.25);
    border-radius: 1rem; /* 16px */
    padding: 1rem; /* 16px */
    background: rgba(60, 214, 180, 0.06);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: var(--shadow-sm);
    cursor: pointer;

    &:hover {
        background: rgba(60, 214, 180, 0.14);
        border-color: rgba(60, 214, 180, 0.55);
        transform: translateY(-0.125rem); /* -2px */
        box-shadow: var(--shadow-md);
    }
`;

export const DivPostTag = styled.div`
    position: absolute;
    top: 0.5rem; /* 8px */
    left: 0.5rem; /* 8px */
    padding: 0.25rem 0.625rem; /* 4px 10px */
    background: linear-gradient(135deg, var(--accent-color) 0%, var(--tertiary-text-color) 100%);
    border-radius: 0.5rem; /* 8px */
    color: var(--text-color);
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 1;
    box-shadow: var(--shadow-md);
`;

export const DivPostTitle = styled.div<ButtonTagProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 0.5rem 0.75rem;
    background: transparent;
    border: none;
    text-align: center;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-color);
    transition: all 0.3s ease;
    ${({ $active }) =>
        $active &&
        `
        color: var(--accent-color);
    `}
`;

export const DivMarkdownWrapper = styled.div`
    flex-shrink: 0;
    width: 100%;
    max-width: 62.5rem; /* 1000px */
    min-height: 40vh;

    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(60, 214, 180, 0.25);
    border-radius: 1rem; /* 16px */
    transition: all 0.3s ease;

    overflow: visible;

    word-wrap: break-word;
    word-break: break-word;
    white-space: pre-wrap;

    box-shadow: var(--shadow-md);
    padding: 1.25rem; /* 20px */

    &:hover {
        border-color: rgba(60, 214, 180, 0.55);
    }

    h1, h2, h3, h4, h5 {
        color: var(--text-color);
        margin-top: 1.1em;
        margin-bottom: 0.4em;
    }

    p {
        margin: 0.6em 0;
        line-height: 1.6;
    }

    ul, ol {
        margin: 0.6em 0 0.6em 1.25rem;
    }

    li {
        margin: 0.35em 0;
    }

    a {
        color: var(--accent-color);
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: var(--accent-hover);
            text-decoration: underline;
        }
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1em 0;
        display: block;
        overflow-x: auto;
    }

    th, td {
        border: 1px solid var(--glass-border);
        padding: 0.6rem;
        text-align: left;
        white-space: nowrap;
    }

    th {
        background: var(--glass-bg);
        color: var(--text-color);
        font-weight: 600;
    }

    td {
        color: var(--text-secondary);
    }
`;

export const DivPostHeader = styled.div`
    padding: 1.25rem 2.5rem 1.5rem 2.5rem; /* 20px 40px 24px 40px */
    border-bottom: 1px solid var(--glass-border);
    margin-bottom: 1.5rem; /* 24px */
    border-radius: 0.75rem; /* 12px */
    background: rgba(60, 214, 180, 0.08);
`;

export const MetaRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 2rem 0 1rem;
`;

export const MetaCard = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(60, 214, 180, 0.35);
    background: rgba(60, 214, 180, 0.08);
    color: rgb(60, 214, 180);
    font-size: 0.85rem;
    font-weight: 600;
`;

export const TagChip = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.55rem 0.85rem;
    border-radius: 15px;
    border: 1px solid rgba(60, 214, 180, 0.35);
    background: rgba(60, 214, 180, 0.08);
    color: rgb(60, 214, 180);
    font-size: 0.8rem;
    font-weight: 600;
    width: 7.5rem;
    justify-content: center;
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.3s ease;

    &:hover {
        background: rgb(60, 214, 180);
        border-color: rgb(60, 214, 180);
        color: var(--primary-color);
        transform: translateY(-0.125rem);
        box-shadow: var(--shadow-md);
    }
`;

export const DivPostTitleHeader = styled.h1`
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.4;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    border: 1px solid rgba(60, 214, 180, 0.3);
    background: rgba(60, 214, 180, 0.08);
`;

export const SpanPostTag = styled.span`
    color: var(--tertiary-text-color);
    margin-right: 0.5rem; /* 8px */
`;

export const SpanPostTitle = styled.span`
    font-size: 2.7rem;
    color: var(--text-color);
    font-weight: 700;
`;
