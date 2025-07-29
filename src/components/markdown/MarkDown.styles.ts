import styled from "styled-components";

export const DivCenteredWrapper = styled.div`
    margin: 0 auto;
    padding: 3rem;
    line-height: 1;

    h1,
    h2,
    h3 {
        margin-top: 1.5em;
    }

    h1 {
        padding-top: 2rem;
    }

    pre code {
        background: none !important;
        background-color: transparent !important;

        font-family: "Fira Code";
    }

    pre {
        background: #3a3737ff;

        border-radius: 3px;
        border: 2px solid var(--secondary-border-color);

        padding: 1rem;
        overflow-x: auto;
    }

    code {
        padding: 0.2rem 0.4rem;
        padding: 0.2rem 0.4rem;
        background-color: rgba(0, 0, 0, 0.56);
        border-radius: 4px;
        font-family: "Fira Code";
        font-size: 0.95em;
    }

    table {
        border-collapse: collapse;
    }

    th,
    td {
        border: 1px solid #ccc;
        padding: 0.5rem;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 1rem auto;
    }
`;
