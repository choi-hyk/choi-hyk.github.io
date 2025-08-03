import { useState } from "react";
import { MarkdownRenderer } from "../../components/markdown/MarkDown";

function Profile() {
    const [markdownLoaded, setMarkdownLoaded] = useState(false);

    return (
        <>
            <MarkdownRenderer
                page="profile"
                onLoad={() => setMarkdownLoaded(true)}
            />
        </>
    );
}

export default Profile;
