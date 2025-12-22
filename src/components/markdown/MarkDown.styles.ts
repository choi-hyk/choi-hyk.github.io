import styled from "styled-components";

export const DivCenteredWrapper = styled.div`
    margin: 0 auto;
    padding: 2rem 3rem;
    max-width: 65rem; 

    .markdown-body {
        background: transparent;
        color: var(--text-secondary);
        font-size: 1.125rem;
        line-height: 1.7;
        word-break: break-word;
        overflow-wrap: break-word; 
    }

    .markdown-body img {
        max-width: 100% !important; 
        height: auto !important;    
        display: block;             
        margin: 3rem auto;          
        border-radius: 8px;         
    }

    .markdown-body strong {
        font-weight: 700 !important;
        color: var(--text-main, #ececec);
    }

    .markdown-body code:not([class]) {
        padding: 0.2rem 0.4rem !important;
        background-color: var(--bg-inline-code, rgba(175, 184, 193, 0.2)) !important;
        border-radius: 8px !important;
        font-size: 0.85em !important;
        font-weight: bold !important;
        margin: 0 0.2rem !important;
    }

    .markdown-body > :first-child {
        margin-top: 0 !important;
    }

    .markdown-body p {
        margin-top: 0;
        margin-bottom: 1.5rem !important; 
    }

    .markdown-body table {
        display: block; 
        width: 100%;
        max-width: 100%;
        margin-top: 2rem !important;
        margin-bottom: 2rem !important;
        
        overflow-x: auto; 
        border-collapse: collapse; 
        border-spacing: 0;
        white-space: nowrap; 
    }

    .markdown-body th,
    .markdown-body td {
        padding: 0.75rem 1rem; 
        border: 2px solid var(--border-color, #d0d7de);
        text-align: left;
        background-color: var(--bg-table-cell, #2c2d2eff);
    }

    .markdown-body th {
        background-color: var(--bg-table-head, #35383aff);
        font-weight: 600;
    }

    .markdown-body p:empty,
    .markdown-body p > br:only-child {
        display: none;
    }

    .markdown-body p + ul,
    .markdown-body p + ol {
        margin-top: -3rem !important; 
    }

    .markdown-body ul, 
    .markdown-body ol {
        padding-left: 2rem;
    }

    .markdown-body li {
        margin: 0.25rem 0;
        line-height: 1.6;
    }

    .markdown-body li > p {
        margin-bottom: 0 !important;
        margin-top: 0 !important;
    }

    .markdown-body blockquote {
        margin: 2rem 0;
        padding: 1rem 1rem 1rem 1.5rem;
        border-left: 8px solid #1e6e56ff;
        background-color: #1b4237b0;
        color: var(--text-secondary);
        border-radius: 0 8px 8px 0;
    }

    .markdown-body blockquote p {
        margin-bottom: 0 !important;
    }
    
    .markdown-body blockquote > :first-child {
        margin-top: 0;
    }

    .markdown-body blockquote > :last-child {
        margin-bottom: 0;
    }

    .markdown-body .katex-display {
        margin: 1.5rem 0;
    }
`;