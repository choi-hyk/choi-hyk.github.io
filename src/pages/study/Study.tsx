import { DivCenteredWrapper } from "./Study.styles";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import { useState, useEffect } from "react";

function Study() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 2초 후에 로딩 완료
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingSpinner page="study" />;
    }

    return <DivCenteredWrapper>Study</DivCenteredWrapper>;
}

export default Study;
