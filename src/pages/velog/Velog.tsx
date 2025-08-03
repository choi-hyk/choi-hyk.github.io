import { useEffect, useState } from "react";
import {
    ButtonTag,
    DivMarkdownWrapper,
    DivPostInit,
    DivPostTag,
    DivPostTitle,
    DivPostWrapper,
    DivTagContainer,
    DivVelogWrapper,
} from "./Velog.styles";
import { Post } from "../../api/api";
import {
    MarkDownPostRenderer,
    MarkdownRenderer,
} from "../../components/markdown/MarkDown";
import moment from "moment";
import { useVelog } from "../../api/useApi";

function Velog() {
    const { data, error, isLoading } = useVelog();
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    useEffect(() => {
        if (data && data.length > 0 && !selectedPost) {
            setSelectedPost(data[0]);
        }
    }, [data, selectedPost]);

    if (error) return null;
    if (isLoading) return null;
    if (!data || data.length === 0) return null;
    const posts = data;
    const tags = Array.from(new Set(posts.map((p) => p.tag || "기타")));

    const grouped = posts.reduce((acc, post) => {
        const key = post.tag || "기타";
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(post);
        return acc;
    }, {} as Record<string, Post[]>);

    const visiblePosts =
        selectedTag && grouped[selectedTag] ? grouped[selectedTag] : posts;

    return (
        <>
            <MarkdownRenderer page="velog" />
            <DivTagContainer>
                <ButtonTag
                    onClick={() => setSelectedTag(null)}
                    $active={selectedTag === null}
                >
                    전체
                </ButtonTag>
                {tags.map((tag) => (
                    <ButtonTag
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        $active={selectedTag === tag}
                    >
                        {tag}
                    </ButtonTag>
                ))}
            </DivTagContainer>
            <DivVelogWrapper>
                <DivPostWrapper>
                    {visiblePosts.map((post) => (
                        <DivPostInit
                            key={post.id}
                            onClick={() => setSelectedPost(post)}
                        >
                            <DivPostTag>{post.tag}</DivPostTag>
                            <DivPostTitle $active={selectedPost === post}>
                                {post.title}
                            </DivPostTitle>
                        </DivPostInit>
                    ))}
                </DivPostWrapper>
                <DivMarkdownWrapper>
                    <h5
                        style={{
                            color: "var(--third-text-color)",
                            paddingLeft: "40px",
                        }}
                    >
                        {moment(selectedPost?.pubDate).format(
                            "YYYY-MM-DD HH:mm"
                        )}
                    </h5>
                    <h4
                        style={{
                            color: "var(--third-text-color)",
                            paddingLeft: "40px",
                        }}
                    >
                        {selectedPost?.link && (
                            <a
                                href={selectedPost.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "var(--fourth-text-color)",
                                    textDecoration: "underline",
                                }}
                            >
                                Velog에서 보기
                            </a>
                        )}
                    </h4>
                    <h1
                        style={{
                            color: "var(--secondary-text-color)",
                            paddingLeft: "40px",
                        }}
                    >
                        <span
                            style={{
                                color: "var(--tertiary-text-color)",
                            }}
                        >
                            [{selectedPost?.tag}]
                        </span>
                        <span> {selectedPost?.title}</span>
                    </h1>
                    {selectedPost && (
                        <MarkDownPostRenderer post={selectedPost} />
                    )}
                </DivMarkdownWrapper>
            </DivVelogWrapper>
        </>
    );
}

export default Velog;
