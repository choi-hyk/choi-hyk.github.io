import { DivSideBar, DivIconContainer } from "./SideBar.styles";
import IconBox from "../icon/Icon";
import Calender from "../../assets/calender.png";
import Game from "../../assets/game.png";
import Profile from "../../assets/profile.png";
import Setting from "../../assets/setting.png";
import Study from "../../assets/study.png";

function SideBar() {
    return (
        <DivSideBar>
            <DivIconContainer>
                <IconBox iconSrc={Profile} iconName="profile" />
                <IconBox iconSrc={Calender} iconName="calendar" />
                <IconBox iconSrc={Study} iconName="study" />
                <IconBox iconSrc={Game} iconName="game" />
                <IconBox iconSrc={Setting} iconName="setting" />
            </DivIconContainer>
        </DivSideBar>
    );
}

export default SideBar;
