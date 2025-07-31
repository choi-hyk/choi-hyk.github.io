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
