import styled from "styled-components";

const DivProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background-color: var(--secondary-border-color);
    width: 40%;
    gap: 40px;
    height: 300px;
`;

const DivProfileInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: bold;
`;

const DivAvatar = styled.div`
    width: 40%;
    border-radius: 50%;
    overflow: hidden;

    img {
        background-color: var(--primary-color);
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const DivLogin = styled.div``;

const DivHtml = styled.div``;

const DivName = styled.div`
    gap: 10px;
    display: flex;
    color: var(--text-color);
    font-size: 1.3em;
`;

const DivComapny = styled.div`
    color: var(--path_bar_background_color);
    font-size: 1.1em;
`;

const DivLocation = styled.div`
    color: var(--path_bar_background_color);
    font-size: 1.1em;
`;

const DivFollowers = styled.div`
    font-size: 0.8em;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const DivFollowing = styled.div``;

export const DivRepositoriesContainer = styled.div`
    display: flex;
    gap: 20px;
    height: fit-content;
`;

export const DivRepoList = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 300px;
    height: 400px;
    overflow-y: auto;
    border: 2px solid var(--terminal-text-color);
    border-radius: 6px;
    background-color: var(--border-color);
    padding: 20px;
    font-size: 1.2rem;
    font-weight: bold;
`;

export const DivRepoItem = styled.div`
    padding: 10px;
    border-bottom: 1px solid var(--secondary-border-color);
    cursor: pointer;
    &:last-child {
        border-bottom: none;
    }
    &:hover {
        background-color: var(--border-color);
    }
`;

export const DivRepoName = styled.div`
    font-weight: bold;
    color: var(--primary-color);
`;

export const DivRepoStats = styled.div`
    font-size: 0.9rem;
    color: var(--tertiary-text-color);
`;

export const DivRepoDetails = styled.div`
    flex-shrink: 0;
    width: 650px;
    height: 400px;
    overflow-y: auto;
    background-color: var(--secondary-border-color);
    border: 2px solid var(--terminal-text-color);
    border-radius: 6px;
    padding: 20px;
`;

export const DivSectionTitle = styled.h3`
    margin-top: 20px;
    margin-bottom: 10px;
    color: var(--text-color);
`;

export const DivListItem = styled.div`
    margin-bottom: 8px;
    font-size: 1rem;

    a {
        color: var(--primary-color);
        text-decoration: underline;
    }
`;

export {
    DivProfileContainer,
    DivProfileInnerContainer,
    DivLogin,
    DivAvatar,
    DivHtml,
    DivName,
    DivComapny,
    DivLocation,
    DivFollowers,
    DivFollowing,
};
