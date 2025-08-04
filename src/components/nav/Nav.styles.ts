import styled from "styled-components";

export const DivPathBar = styled.div`
    background-color: var(--path_bar_background_color);

    border: 2px solid var(--border-color);
    border-radius: 0 0 24px 24px;

    width: 100%;
    height: 10%;
    padding: 0.4%;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    position: fixed;
    top: 0;
    left: 0;
`;

export const DivTitleBar = styled.div`
    background-color: var(--path_bar_innder_background_color);

    width: 40%;
    height: 100%;

    border: 1px solid var(--secondary-border-color);
    border-radius: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PageIcon = styled.img`
    width: 7%;
    margin-right: 10px;
`;

export const SpanText1 = styled.span`
    color: white;
    font-size: larger;
    font-weight: bold;
    position: relative;
`;

export const SpanText2 = styled(SpanText1)`
    color: var(--secondary-text-color);
`;
