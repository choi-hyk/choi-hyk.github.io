import { useEffect, useState } from "react";
import { DivCenteredWrapper } from "./MarkDown.styles";
import { Post } from "../../api/api";

import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import markedKatex from "marked-katex-extension";
import hljs from "highlight.js";
import DOMPurify from "dompurify";

import "highlight.js/styles/github-dark.css";
import "katex/dist/katex.min.css";

marked.use(
    markedHighlight({
        langPrefix: "hljs language-",
        highlight(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : "plaintext";
            return hljs.highlight(code, { language }).value;
        },
    })
);

marked.use(markedKatex({
    throwOnError: false,
    output: "html",
    nonStandard: true,
}));

function MarkDownPostRenderer({
    post,
    markdown,
}: {
    post: Post;
    markdown?: string;
}) {
    const [html, setHtml] = useState<string>("");

    useEffect(() => {
        const rawMarkdown = markdown ?? post.description ?? "";

        let processed = rawMarkdown;

        processed = processed.replace(/\*\*\s*`(.+?)`\s*\*\*/g, "**$1**");

        processed = processed.replace(
            /\*\*([^*]*?[\(「\[][^*]*?[\)」\]][^*]*?)\*\*/g, 
            "<strong>$1</strong>"
        );

        processed = processed.replace(/`(\$[^`]+?\$)`/g, "$1");

        processed = processed.replace(/(\$[^$]+?\$)/g, (match) => {
            return match.replace(/_/g, "\\_");
        });

        const parseMarkdown = async () => {
            const parsed = await marked.parse(processed, {
                breaks: true,
                gfm: true,
            });

            const sanitized = DOMPurify.sanitize(parsed, {
                ADD_TAGS: [
                    "iframe", "span", "math", "style",
                    "annotation", "semantics", "mtext", "mn", "mo", "mi", "mspace",
                    "mover", "munder", "munderover", "msup", "msub", "msubsup", "mfrac",
                    "mroot", "msqrt", "mtable", "mtr", "mtd", "mlabeledtr", "mrow",
                ],
                ADD_ATTR: [
                    "allow", "allowfullscreen", "frameborder", "scrolling",
                    "class", "style", "xmlns", "display", "role", "aria-hidden"
                ],
            });

            setHtml(sanitized);
        };

        parseMarkdown();
    }, [markdown, post.description]);

    return (
        <DivCenteredWrapper>
            <div
                className="markdown-body"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </DivCenteredWrapper>
    );
}

export { MarkDownPostRenderer };