import { useEffect, useState } from "react";
import { DivCenteredWrapper } from "../../components/markdown/MarkDown.styles";
import { MarkdownRenderer } from "../../components/markdown/MarkDown";

function Profile() {
    return <MarkdownRenderer page="profile" />;
}

export default Profile;
