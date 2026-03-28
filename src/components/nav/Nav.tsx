import { usePageContext } from "../../context/PageContext";
import { useLocation } from "react-router-dom";
import {
    DivPathBar,
    DivTitleBar,
    SpanText1,
    SpanText2,
    PageIcon,
    DivNavContainer,
    DivNavIcons,
    PageIconWrapper,
} from "./Nav.styles";
import IconBox from "../icon/Icon";
import velogIcon from "../../assets/velog.svg";
import profileIcon from "../../assets/profile.png";
import githubIcon from "../../assets/github.svg";
import hippoboxIcon from "../../assets/hippobox.svg";
import rhythmeIcon from "../../assets/RhythmE.gif";

function Nav() {
    const { currentPage } = usePageContext();
    const location = useLocation();
    const rawPath =
        location.pathname === "/" && location.hash.startsWith("#/")
            ? location.hash.replace("#", "")
            : location.pathname;
    const displayPath = rawPath.startsWith("/velog/")
        ? "/velog"
        : rawPath;

    const getPageIcon = (pageName: string) => {
        switch (pageName.toLowerCase()) {
            case "/velog":
                return velogIcon;
            case "/github":
                return githubIcon;
            case "/hippobox":
                return hippoboxIcon;
            case "/rhythme":
                return rhythmeIcon;
            case "/profile":
                return profileIcon;
            default:
                return profileIcon;
        }
    };

    return (
        <>
            <DivPathBar>
                <DivNavContainer>
                    <DivTitleBar>
                        <PageIconWrapper>
                            <PageIcon
                                src={getPageIcon(currentPage)}
                                alt={`${currentPage} icon`}
                            />
                        </PageIconWrapper>
                        <SpanText1>choi-hyk.github.io/</SpanText1>
                        <SpanText2>#{displayPath}</SpanText2>
                    </DivTitleBar>
                    <DivNavIcons>
                        <IconBox iconName="profile" iconSrc={profileIcon} />
                        <IconBox iconName="github" iconSrc={githubIcon} />
                        <IconBox iconName="velog" iconSrc={velogIcon} />
                        <IconBox iconName="hippobox" iconSrc={hippoboxIcon} />
                        <IconBox iconName="Rhythme" iconSrc={rhythmeIcon} />
                    </DivNavIcons>
                </DivNavContainer>
            </DivPathBar>
        </>
    );
}

export default Nav;
