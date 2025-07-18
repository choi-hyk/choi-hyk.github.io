import { DivPathBar, DivTitleBar, SpanText1, SpanText2 } from "./Nav.styles";

function Nav() {
    return (
        <>
            <DivPathBar>
                <DivTitleBar>
                    <SpanText1>Path</SpanText1>
                    <SpanText2>Bar</SpanText2>
                </DivTitleBar>
            </DivPathBar>
        </>
    );
}

export default Nav;
