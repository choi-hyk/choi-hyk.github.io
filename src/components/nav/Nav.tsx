import { usePageContext } from "../../context/PageContext";
import {
    DivPathBar,
    DivTitleBar,
    SpanText1,
    SpanText2,
    PageIcon,
} from "./Nav.styles";
import githubIcon from "../../assets/github.png";
import velogIcon from "../../assets/velog.png";
import calenderIcon from "../../assets/calender.png";
import profileIcon from "../../assets/profile.png";

function Nav() {
    const { currentPage } = usePageContext();

    const getPageIcon = (pageName: string) => {
        switch (pageName) {
            case "/github":
                return githubIcon;
            case "/calender":
                return calenderIcon;
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
                <DivTitleBar>
                    <PageIcon
                        src={getPageIcon(currentPage)}
                        alt={`${currentPage} icon`}
                    />
                    <SpanText1>choi-hyk.github.io/</SpanText1>
                    <SpanText2>#{currentPage}</SpanText2>
                </DivTitleBar>
            </DivPathBar>
        </>
    );
}

export default Nav;
