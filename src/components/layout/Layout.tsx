import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/nav/Nav";

const Wrapper = styled.div`
    display: flex;
`;

const Content = styled.main`
    flex-grow: 1;
    padding-left: 5%;
    padding-top: 6rem;
`;

function Layout() {
    return (
        <>
            <Nav />
            <Wrapper>
                <Content>
                    <Outlet />
                </Content>
            </Wrapper>
        </>
    );
}

export default Layout;
