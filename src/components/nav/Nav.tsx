import { usePageContext } from "../../context/PageContext";
import { DivPathBar, DivTitleBar, SpanText1, SpanText2 } from "./Nav.styles";

function Nav() {
    const { currentPage } = usePageContext();

    return (
        <>
            <DivPathBar>
                <DivTitleBar>
                    <SpanText1>choi-hyk.github.io/</SpanText1>
                    <SpanText2>#{currentPage}</SpanText2>
                </DivTitleBar>
            </DivPathBar>
        </>
    );
}

export default Nav;
