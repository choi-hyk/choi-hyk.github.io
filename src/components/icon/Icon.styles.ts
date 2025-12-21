import styled from "styled-components";

interface IconBoxProps {
    $selected?: boolean;
    $tone?: string;
}

export const DivIconBox = styled.div<IconBoxProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    padding: 0.5rem 0.875rem; /* 8px 14px */
    border-radius: 0.625rem; /* 10px */
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 0.625rem; /* 10px */
    height: 100%;

    ${({ $selected, $tone }) => {
        if ($tone) {
            if ($selected) {
                return `
        background: rgba(${$tone}, 0.28);
        border: 1px solid rgba(${$tone}, 0.6);
        &:hover {
            background: rgb(${$tone});
            border-color: rgb(${$tone});
            box-shadow: var(--shadow-md);
            transform: translateY(-0.125rem);
        }
    `;
            }
            return `
        background: rgba(${$tone}, 0.08);
        border: 1px solid rgba(${$tone}, 0.35);
        &:hover {
            background: rgb(${$tone});
            border-color: rgb(${$tone});
            box-shadow: var(--shadow-md);
            transform: translateY(-0.125rem);
        }
    `;
        }
        if ($selected) {
            return `
        background: linear-gradient(135deg, var(--accent-color) 0%, var(--tertiary-text-color) 100%);
        border: 1px solid var(--glass-border);
        box-shadow: var(--shadow-glow);
    `;
        }
        return `
        border: 1px solid transparent;
        &:hover {
            background: var(--glass-bg);
            border-color: var(--glass-border);
            box-shadow: var(--shadow-md);
            transform: translateY(-0.125rem);
        }
    `;
    }}
`;

export const IconWrapper = styled.div<IconBoxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem; /* 24px */
    color: ${({ $selected, $tone }) => {
        if ($tone) {
            return $selected ? "var(--primary-color)" : `rgb(${$tone})`;
        }
        return $selected ? "var(--text-color)" : "var(--text-secondary)";
    }};
    transition: all 0.3s ease;
    flex-shrink: 0;

    ${DivIconBox}:hover & {
        color: ${({ $tone }) =>
            $tone ? "var(--primary-color)" : "var(--text-color)"};
        transform: scale(1.1);
    }
`;

export const IconImage = styled.img`
    width: 1.5rem; /* 24px */
    height: 1.5rem; /* 24px */
    object-fit: contain;
    display: block;
`;

interface SpanIconNameProps {
    $selected?: boolean;
    $tone?: string;
}

export const SpanIconName = styled.span<SpanIconNameProps>`
    color: ${({ $selected, $tone }) => {
        if ($tone) {
            return $selected ? "var(--primary-color)" : `rgb(${$tone})`;
        }
        return $selected ? "var(--text-color)" : "var(--text-secondary)";
    }};
    font-size: 0.875rem;
    font-weight: 500;
    transition: color 0.3s ease;
    text-transform: capitalize;

    ${DivIconBox}:hover & {
        color: ${({ $tone }) =>
            $tone ? "var(--primary-color)" : "var(--text-color)"};
    }
`;
