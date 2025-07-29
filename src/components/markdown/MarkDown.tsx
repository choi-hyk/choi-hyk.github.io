import { useEffect, useState } from "react";
import { DivCenteredWrapper } from "./MarkDown.styles";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { Post } from "../../api";

function MarkdownRenderer({ page }: { page: string }) {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(`/markdown/${page}.md`)
            .then((res) => res.text())
            .then((text) => setMarkdown(text))
            .catch((err) => console.error("파일 읽기 실패:", err));
    }, []);

    return (
        <DivCenteredWrapper>
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {markdown}
            </ReactMarkdown>
        </DivCenteredWrapper>
    );
}

function MarkDownPostRenderer({ post }: { post: Post }) {
    return (
        <DivCenteredWrapper>
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {post.description}
            </ReactMarkdown>
        </DivCenteredWrapper>
    );
}

export { MarkdownRenderer, MarkDownPostRenderer };
