import {
    ProfileContainer,
    ProfileCard,
    ProfileHeader,
    ProfileTitle,
    SubtitleRow,
    ProfileSection,
    SectionTitle,
    InlineIconImage,
    InfoItem,
    InfoLabel,
    InfoValue,
    LinkContainer,
    LinkButton,
    StackContainer,
    StackBadge,
    Divider,
} from "./Profile.styles";
import {
    RiCalendar2Line,
    RiHandHeartLine,
    RiLinksLine,
    RiMailLine,
    RiToolsLine,
    RiUser3Line,
} from "react-icons/ri";
import {
    SiAndroid,
    SiC,
    SiCplusplus,
    SiDart,
    SiFlutter,
    SiJavascript,
    SiOpenjdk,
    SiPython,
    SiReact,
} from "react-icons/si";
import ProfileIcon from "../../assets/profile.png";
import VelogIcon from "../../assets/velog.svg";
import GitHubIcon from "../../assets/github.svg";

function Profile() {
    const stackItems = [
        { label: "C", icon: <SiC />, tone: "91, 140, 255" },
        { label: "C++", icon: <SiCplusplus />, tone: "124, 200, 255" },
        { label: "Java", icon: <SiOpenjdk />, tone: "255, 165, 0" },
        { label: "Python", icon: <SiPython />, tone: "70, 170, 255" },
        { label: "JavaScript", icon: <SiJavascript />, tone: "245, 200, 66" },
        { label: "Dart", icon: <SiDart />, tone: "0, 180, 216" },
        { label: "Flutter", icon: <SiFlutter />, tone: "96, 200, 255" },
        { label: "Android", icon: <SiAndroid />, tone: "80, 200, 120" },
        { label: "React", icon: <SiReact />, tone: "97, 218, 251" },
    ];

    return (
        <ProfileContainer>
            <ProfileCard>
                <ProfileHeader>
                    <ProfileTitle>
                        Profile
                    </ProfileTitle>
                    <SubtitleRow>
                        Hello everyone!
                        <RiHandHeartLine />
                    </SubtitleRow>
                </ProfileHeader>

                <ProfileSection>
                    <SectionTitle>
                        <InlineIconImage src={ProfileIcon} alt="profile icon" />
                        Profile
                    </SectionTitle>
                    <InfoItem>
                        <InfoLabel>
                            <RiUser3Line />
                            Name
                        </InfoLabel>
                        <InfoValue>Choi Hyeok</InfoValue>
                    </InfoItem>
                    <InfoItem>
                        <InfoLabel>
                            <RiCalendar2Line />
                            Birth
                        </InfoLabel>
                        <InfoValue>2001.07.09</InfoValue>
                    </InfoItem>
                    <InfoItem>
                        <InfoLabel>
                            <RiMailLine />
                            E-mail
                        </InfoLabel>
                        <InfoValue>
                            <a
                                href="mailto:blindlchoil@gmail.com"
                                style={{
                                    color: "var(--accent-color)",
                                    textDecoration: "none",
                                }}
                            >
                                blindlchoil@gmail.com
                            </a>
                            {", "}
                            <a
                                href="mailto:8167chhk@naver.com"
                                style={{
                                    color: "var(--accent-color)",
                                    textDecoration: "none",
                                }}
                            >
                                8167chhk@naver.com
                            </a>
                        </InfoValue>
                    </InfoItem>
                </ProfileSection>

                <Divider />

                <ProfileSection>
                    <SectionTitle>
                        <RiLinksLine />
                        Blog
                    </SectionTitle>
                    <LinkContainer>
                        <LinkButton
                            href="https://github.com/choi-hyk"
                            target="_blank"
                            rel="noopener noreferrer"
                            $tone="150, 170, 255"
                        >
                            <InlineIconImage src={GitHubIcon} alt="github icon" />
                            GitHub
                        </LinkButton>
                        <LinkButton
                            href="https://velog.io/@choi-hyk/posts"
                            target="_blank"
                            rel="noopener noreferrer"
                            $tone="60, 214, 180"
                        >
                            <InlineIconImage src={VelogIcon} alt="velog icon" />
                            Velog
                        </LinkButton>
                    </LinkContainer>
                </ProfileSection>

                <Divider />

                <ProfileSection>
                    <SectionTitle>
                        <RiToolsLine />
                        Stack
                    </SectionTitle>
                    <StackContainer>
                        {stackItems.map((stack) => (
                            <StackBadge key={stack.label} $tone={stack.tone}>
                                {stack.icon}
                                {stack.label}
                            </StackBadge>
                        ))}
                    </StackContainer>
                </ProfileSection>
            </ProfileCard>
        </ProfileContainer>
    );
}

export default Profile;
