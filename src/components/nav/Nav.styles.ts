import styled from "styled-components";

export const DivPathBar = styled.div`
    background-color: rgba(20, 24, 28, 0.45);

    border: 2px solid var(--border-color);
    border-radius: 0 0 24px 24px;

    width: 100%;
    height: 100px;
    padding: 0.6% 2%;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
`;

export const DivNavContainer = styled.div`
    width: 100%;
    max-width: 70rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;

export const DivTitleBar = styled.div`
    background-color: var(--path_bar_innder_background_color);

    width: 40%;
    height: 100%;

    border: 0.5px solid var(--accent-color);
    border-radius: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 28px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        border-color: var(--accent-color);
        box-shadow: var(--shadow-xl);
    }
`;

export const PageIconWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5rem;
    color: var(--accent-color);
    margin-right: 0.5rem;
    flex-shrink: 0;
`;

export const DivNavIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    height: 100%;
    margin-left: auto;
`;

export const PageIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
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
