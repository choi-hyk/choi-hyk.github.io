import moment from "moment";
import { Post } from "../../api/api";
import {
    ButtonTag,
    DivMarkdownWrapper,
    DivPostInit,
    DivPostTag,
    DivPostTitle,
    DivPostWrapper,
    DivTagContainer,
    DivVelogWrapper,
} from "./velog.styles";
import { MarkDownPostRenderer } from "../markdown/MarkDown";

interface VelogProps {
    visiblePosts: Post[];
    selectedPost: Post | null;
    setSelectedPost: (post: Post | null) => void;
}

function VelogWrapper({
    visiblePosts,
    selectedPost,
    setSelectedPost,
}: VelogProps) {
    return (
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
                    {moment(selectedPost?.pubDate).format("YYYY-MM-DD HH:mm")}
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
                {selectedPost && <MarkDownPostRenderer post={selectedPost} />}
            </DivMarkdownWrapper>
        </DivVelogWrapper>
    );
}

interface ButtonTagProps {
    selectedTag: string | null;
    setSelectedTag: (tag: string | null) => void;
    tags: string[];
}

function VelogTagWrapper({
    setSelectedTag,
    selectedTag,
    tags,
}: ButtonTagProps) {
    return (
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
    );
}

export { VelogWrapper, VelogTagWrapper };
