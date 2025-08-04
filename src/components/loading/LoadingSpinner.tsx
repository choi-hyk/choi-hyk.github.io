import React from "react";
import styled, { keyframes } from "styled-components";
import githubIcon from "../../assets/github.png";
import velogIcon from "../../assets/velog.png";
import calenderIcon from "../../assets/calender.png";
import profileIcon from "../../assets/profile.png";
import studyIcon from "../../assets/study.png";
import settingIcon from "../../assets/setting.png";

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--background-color);
    gap: 20px;
`;

const IconWrapper = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoadingIcon = styled.img`
    width: 80px;
    height: 80px;
    filter: drop-shadow(0 0 10px var(--primary-color));
`;

const LoadingText = styled.div`
    font-size: 1.2rem;
    color: var(--text-color);
    font-weight: bold;
    animation: ${pulse} 2s ease-in-out infinite;
`;

const LoadingDots = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 10px;
`;

const Dot = styled.div<{ delay: number }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--primary-color);
    animation: ${pulse} 1.4s ease-in-out infinite;
    animation-delay: ${(props) => props.delay}s;
`;

interface LoadingSpinnerProps {
    page?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ page = "home" }) => {
    const getPageIcon = (pageName: string) => {
        switch (pageName) {
            case "github":
                return githubIcon;
            case "velog":
                return velogIcon;
            case "calender":
                return calenderIcon;
            case "profile":
                return profileIcon;
            case "study":
                return studyIcon;
            case "setting":
                return settingIcon;
            default:
                return profileIcon;
        }
    };

    const getPageText = (pageName: string) => {
        switch (pageName) {
            case "github":
                return "GitHub 데이터를 불러오는 중";
            case "velog":
                return "Velog 포스트를 불러오는 중";
            case "calender":
                return "캘린더 이벤트를 불러오는 중";
            case "profile":
                return "프로필 정보를 불러오는 중";
            case "study":
                return "스터디 정보를 불러오는 중";
            default:
                return "데이터를 불러오는 중";
        }
    };

    return (
        <LoadingContainer>
            <IconWrapper>
                <LoadingIcon src={getPageIcon(page)} alt={`${page} icon`} />
            </IconWrapper>
            <LoadingText>{getPageText(page)}</LoadingText>
            <LoadingDots>
                <Dot delay={0} />
                <Dot delay={0.2} />
                <Dot delay={0.4} />
            </LoadingDots>
        </LoadingContainer>
    );
};

export default LoadingSpinner;
