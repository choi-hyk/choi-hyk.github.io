import styled from "styled-components";

export const DivCenteredWrapper = styled.div`
    margin: 0 auto;
    padding: 2rem 3rem;
    max-width: 60rem;

    .markdown-body {
        background: transparent;
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.7;
    }

    .markdown-body > :first-child {
        margin-top: 0 !important;
    }

    .markdown-body p:empty {
        display: none;
    }

    .markdown-body p > br:only-child {
        display: none;
    }

    .markdown-body .katex-display {
        margin: 0.6em 0;
    }

    .markdown-body p {
        margin: 0.4em 0 !important;
    }

    .markdown-body p + table {
        margin-top: 0.2em !important;
    }

    .markdown-body table {
        margin-top: 0.2em !important;
    }
`;
