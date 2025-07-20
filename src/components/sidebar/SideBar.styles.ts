import styled from "styled-components";

export const DivSideBar = styled.div`
    background-color: var(--primary-color);

    border: 1px solid;
    border-color: var(--secondary-color);

    width: 5%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    left: 0;
    top: 0;
`;

export const DivIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;
