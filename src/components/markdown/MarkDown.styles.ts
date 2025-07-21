import styled from "styled-components";

export const DivCenteredWrapper = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");

    margin: 0 auto;
    padding: 3rem;
    line-height: 1.7;

    h1,
    h2,
    h3 {
        margin-top: 1.5em;
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
    }

    table {
        border-collapse: collapse;
    }

    th,
    td {
        border: 1px solid #ccc;
        padding: 0.5rem;
    }
`;
