import { useState } from "react";
import { MarkdownRenderer } from "../../components/markdown/MarkDown";
import LoadingSpinner from "../../components/loading/LoadingSpinner";

function Profile() {
    const [markdownLoaded, setMarkdownLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleMarkdownLoad = () => {
        setMarkdownLoaded(true);
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <LoadingSpinner page="profile" />}
            <MarkdownRenderer page="profile" onLoad={handleMarkdownLoad} />
        </>
    );
}

export default Profile;
