import React from "react";
import { useNavigate } from "react-router-dom";
import { DivIconBox, ImgIcon, SpanIconName } from "./Icon.styles";

interface IconBoxProps {
    iconSrc: string;
    iconName: string;
    alt?: string;
}

const IconBox: React.FC<IconBoxProps> = ({ iconSrc, iconName, alt }) => {
    const navigate = useNavigate();

    return (
        <DivIconBox onClick={() => navigate(`/${iconName.toLowerCase()}`)}>
            <ImgIcon src={iconSrc} alt={alt ?? iconName} />
            <SpanIconName>{iconName}</SpanIconName>
        </DivIconBox>
    );
};

export default IconBox;
