import { usePageContext } from "../../context/PageContext";
import { useLocation, useNavigate } from "react-router-dom";
import { DivIconBox, IconImage, IconWrapper, SpanIconName } from "./Icon.styles";
import { FaUser, FaGithub, FaBlog } from "react-icons/fa";
import { RiBookReadLine, RiGithubLine, RiUser3Line } from "react-icons/ri";
import githubIcon from "../../assets/github.svg";

interface IconBoxProps {
    iconName: string;
    iconSrc?: string;
    iconStyle?: "classic" | "trendy";
}

const IconBox: React.FC<IconBoxProps> = ({
    iconName,
    iconSrc,
    iconStyle = "classic",
}) => {
    const navigate = useNavigate();
    const { currentPage } = usePageContext();
    const location = useLocation();

    const rawPath =
        location.pathname === "/" && location.hash.startsWith("#/")
            ? location.hash.replace("#", "")
            : location.pathname;
    const normalizedPath = rawPath.startsWith("/velog/")
        ? "/velog"
        : rawPath;
    const isSelected = "/" + iconName === normalizedPath || "/" + iconName === currentPage;
    const getTone = () => {
        switch (iconName.toLowerCase()) {
            case "profile":
                return "90, 220, 20";
            case "github":
                return "150, 170, 255";
            case "velog":
                return "60, 214, 180";
            default:
                return undefined;
        }
    };

    const getIcon = () => {
        if (iconSrc) {
            return <IconImage src={iconSrc} alt={`${iconName} icon`} />;
        }

        if (iconName.toLowerCase() === "github") {
            return <IconImage src={githubIcon} alt={`${iconName} icon`} />;
        }

        if (iconStyle === "trendy") {
            switch (iconName.toLowerCase()) {
                case "profile":
                    return <RiUser3Line />;
                case "github":
                    return <RiGithubLine />;
                case "velog":
                    return <RiBookReadLine />;
                default:
                    return <RiUser3Line />;
            }
        }

        switch (iconName.toLowerCase()) {
            case "profile":
                return <FaUser />;
            case "github":
                return <FaGithub />;
            case "velog":
                return <FaBlog />;
            default:
                return <FaUser />;
        }
    };

    return (
        <DivIconBox
            $selected={isSelected}
            $tone={getTone()}
            onClick={() => navigate(`/${iconName.toLowerCase()}`)}
        >
            <IconWrapper $selected={isSelected} $tone={getTone()}>
                {getIcon()}
            </IconWrapper>
            <SpanIconName $selected={isSelected} $tone={getTone()}>
                {iconName}
            </SpanIconName>
        </DivIconBox>
    );
};

export default IconBox;
