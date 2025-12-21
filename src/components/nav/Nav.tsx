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

function Nav() {
    const { currentPage } = usePageContext();
    const location = useLocation();
    const displayPath = location.pathname.startsWith("/velog/")
        ? "/velog"
        : location.pathname;

    const getPageIcon = (pageName: string) => {
        switch (pageName) {
            case "/velog":
                return velogIcon;
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
                                src={
                                    currentPage === "/github"
                                        ? githubIcon
                                        : getPageIcon(currentPage)
                                }
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
                    </DivNavIcons>
                </DivNavContainer>
            </DivPathBar>
        </>
    );
}

export default Nav;
