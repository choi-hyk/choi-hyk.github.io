import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function MarkdownRenderer({ page }: { page: string }) {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(`/markdown/${page}.md`)
            .then((res) => res.text())
            .then((text) => setMarkdown(text))
            .catch((err) => console.error("파일 읽기 실패:", err));
    }, []);

    return (
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {markdown}
        </ReactMarkdown>
    );
}
