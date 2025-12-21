import { Post } from "../../api/api";
import {
    ButtonTag,
    DivPostInit,
    DivPostTag,
    DivPostTitle,
    DivPostWrapper,
    DivTagContainer,
    DivVelogWrapper,
} from "./Velog.styles";

interface VelogListProps {
    posts: Post[];
    onSelect: (post: Post) => void;
}

function VelogWrapper({ posts, onSelect }: VelogListProps) {
    return (
        <DivVelogWrapper>
            <DivPostWrapper>
                {posts.map((post) => {
                    const primaryTag =
                        post.tag || post.tags?.[0] || "Extra";

                    return (
                        <DivPostInit
                            key={post.id}
                            onClick={() => onSelect(post)}
                        >
                            <DivPostTag>{primaryTag}</DivPostTag>
                            <DivPostTitle $active={false}>
                                {post.title}
                            </DivPostTitle>
                        </DivPostInit>
                    );
                })}
            </DivPostWrapper>
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
                All
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
