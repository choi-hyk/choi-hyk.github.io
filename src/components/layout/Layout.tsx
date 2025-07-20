import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/nav/Nav";
import SideBar from "../../components/sidebar/SideBar";

const Wrapper = styled.div`
    display: flex;
`;

const Content = styled.main`
    flex-grow: 1;
    padding-left: 5%;
`;

function Layout() {
    return (
        <>
            <Nav />
            <Wrapper>
                <SideBar />
                <Content>
                    <Outlet />
                </Content>
            </Wrapper>
        </>
    );
}

export default Layout;
