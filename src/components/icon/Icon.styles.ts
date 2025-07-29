import styled from "styled-components";

interface IconBoxProps {
    $selected?: boolean;
}

export const DivIconBox = styled.div<IconBoxProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    aspect-ratio: 1 / 1;

    padding: 3px;

    ${({ $selected }) =>
        $selected &&
        `
        border-radius: 6px;
        border: 1px solid var(--path_bar_background_color);
        background-color: var(--secondary-border-color);
    `}
`;

export const ImgIcon = styled.img`
    width: 70%;
`;

export const SpanIconName = styled.span`
    color: var(--secondary-color);
    text-align: center;
`;
