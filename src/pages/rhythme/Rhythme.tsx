import styled from "styled-components";

const RHYTHME_URL = "https://choi-hyk.github.io/RhythmE/";

function Rhythme() {
    return (
        <RhythmeContainer>
            <FrameBox>
                <RhythmeFrame
                    src={RHYTHME_URL}
                    title="RhythmE"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </FrameBox>
        </RhythmeContainer>
    );
}

export default Rhythme;

const RhythmeContainer = styled.section`
    width: 100%;
    min-height: calc(100vh - 8rem);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

const FrameBox = styled.div`
    width: min(56.25rem, 78vw);
    height: min(43.75rem, 72vh);
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
`;

const RhythmeFrame = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
    background: #fff;
`;
