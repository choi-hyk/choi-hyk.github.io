import { useEffect, useState } from "react";
import { DivCenteredWrapper } from "./MarkDown.styles";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { Post } from "../../api/api";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";

const markdownCache = new Map<string, string>();

function MarkdownRenderer({
    page,
    onLoad,
}: {
    page: string;
    onLoad?: () => void;
}) {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        if (markdownCache.has(page)) {
            setMarkdown(markdownCache.get(page)!);
            if (onLoad) onLoad();
            return;
        }
        fetch(`/markdown/${page}.md`)
            .then((res) => res.text())
            .then((text) => {
                markdownCache.set(page, text);
                setMarkdown(text);
                if (onLoad) onLoad();
            })
            .catch((err) => console.error("Fallback to fetch failed", err));
    }, [page, onLoad]);

    return (
        <DivCenteredWrapper>
            <div className="markdown-body">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeKatex]}
                >
                    {markdown}
                </ReactMarkdown>
            </div>
        </DivCenteredWrapper>
    );
}

function MarkDownPostRenderer({
    post,
    markdown,
}: {
    post: Post;
    markdown?: string;
}) {
    return (
        <DivCenteredWrapper>
            <div className="markdown-body">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeKatex]}
                >
                    {markdown ?? post.description}
                </ReactMarkdown>
            </div>
        </DivCenteredWrapper>
    );
}

export { MarkdownRenderer, MarkDownPostRenderer };
