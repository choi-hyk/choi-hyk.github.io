import styled from "styled-components";

export const DivVelogWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
    align-items: flex-start;
`;

export const DivPostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    flex: 0 0 400px;
    max-width: 400px;

    border: 1.5px solid var(--secondary-color);
    padding: 10px;
    border-radius: 10px;
    background-color: var(--terminal-text-color);

    max-height: 60vh;
    overflow-y: auto;
`;

export const DivTagContainer = styled.div`
    display: flex;
    gap: 10px;
    padding-left: 30px;
`;

interface ButtonTagProps {
    $active: boolean;
}

export const ButtonTag = styled.button<ButtonTagProps>`
    padding: 5px 10px;
    background-color: ${({ $active }) =>
        $active ? "var(--path_bar_background_color)" : "var(--tertiary-color)"};
    color: var(--tertiary-text-color);
    font-size: 0.9rem;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export const DivPostInit = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20vh;
    flex-shrink: 0;
`;

export const DivPostTag = styled.div`
    position: absolute;
    top: 1px;
    left: 1px;
    padding: 5px 10px;
    background-color: var(--terminal_background_color);
    border-radius: 5px;
    color: var(--secondary-text-color);
    font-size: 1rem;
    font-weight: bold;
`;

export const DivPostTitle = styled.div<ButtonTagProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 80%;
    padding: 20px;
    background-color: ${({ $active }) =>
        $active ? "var(--border-color)" : "var(--secondary-border-color)"};
    border: 1.5px solid var(--secondary-color);
    border-radius: 6px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--primary-color);
    cursor: pointer;
`;

export const DivMarkdownWrapper = styled.div`
    flex-shrink: 0;
    width: 980px;
    height: 60vh;

    background-color: var(--secondary-color);
    border-radius: 10px;

    overflow-y: auto;
    overflow-x: auto;

    word-wrap: break-word;
    word-break: break-word;
    white-space: pre-wrap;

    background-color: var(--terminal_background_color);
    border-radius: 5px;
`;
