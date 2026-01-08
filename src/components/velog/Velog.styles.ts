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
    position: relative;
    padding: 1.25rem 2.5rem 1.5rem 2.5rem; /* 20px 40px 24px 40px */
    border-bottom: 1px solid var(--glass-border);
    margin-bottom: 1.5rem; /* 24px */
    border-radius: 0.75rem; /* 12px */
    background: rgba(60, 214, 180, 0.08);
`;

export const BackButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.45rem 0.9rem;
    border-radius: 0.6rem;
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
    color: var(--text-secondary);
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-sm);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    &:hover {
        background: rgba(60, 214, 180, 0.15);
        border-color: rgba(60, 214, 180, 0.65);
        color: var(--accent-color);
        transform: translateY(-0.125rem);
        box-shadow: var(--shadow-md);
    }

    &:focus-visible {
        outline: 2px solid rgba(60, 214, 180, 0.7);
        outline-offset: 2px;
    }
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
    justify-content: center;
    gap: 0.5rem;
    
    padding: 0.5rem 1rem; 
    min-width: 4.5rem; 
    
    border-radius: 9999px;
    border: 1px solid rgba(60, 214, 180, 0.3); 
    background: rgba(60, 214, 180, 0.08);
    backdrop-filter: blur(8px); 
    
    color: rgb(60, 214, 180);
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.02em; 
    white-space: nowrap;
    
    transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); 

    &:hover {
        background: rgba(60, 214, 180, 0.15); 
        border-color: rgba(60, 214, 180, 0.8); 
        color: rgb(60, 214, 180); 
        
        transform: translateY(-2px) scale(1.02); 
        
        box-shadow: 0 4px 15px rgba(60, 214, 180, 0.25); 
    }

    &:active {
        transform: translateY(0) scale(0.98);
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
