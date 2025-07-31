import { DivSideBar, DivIconContainer } from "./SideBar.styles";
import IconBox from "../icon/Icon";
import Calender from "../../assets/calender.png";
import GitHub from "../../assets/github.png";
import Profile from "../../assets/profile.png";
import Setting from "../../assets/setting.png";
import Velog from "../../assets/velog.png";

function SideBar() {
    return (
        <DivSideBar>
            <DivIconContainer>
                <IconBox iconSrc={Profile} iconName="profile" />
                <IconBox iconSrc={Calender} iconName="calendar" />
                <IconBox iconSrc={GitHub} iconName="github" />
                <IconBox iconSrc={Velog} iconName="velog" />
                {/* <IconBox iconSrc={Setting} iconName="setting" /> */}
            </DivIconContainer>
        </DivSideBar>
    );
}

export default SideBar;
