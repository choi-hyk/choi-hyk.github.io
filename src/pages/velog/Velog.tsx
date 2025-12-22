import { useMemo, useState } from "react";
import { VelogTagWrapper, VelogWrapper } from "../../components/velog/Velog";
import type { Post } from "../../api/api";
import { useVelog } from "../../api/useApi";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import {
    DivMarkdownWrapper,
    DivPostHeader,
    DivVelogWrapper,
    MetaRow,
    TagChip,
    StatusCard,
    SpanPostTitle,
} from "../../components/velog/Velog.styles";
import { MarkDownPostRenderer } from "../../components/markdown/MarkDown";
import styled from "styled-components";

function Velog() {
    const { data, error, isLoading } = useVelog();
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const navigate = useNavigate();
    const { postId } = useParams();

    const posts = useMemo(() => data || [], [data]);
    const tags = useMemo(() => {
        return Array.from(
            new Set(
                posts.flatMap((post) => {
                    if (post.tags && post.tags.length > 0) {
                        return post.tags;
                    }
                    if (post.tag) {
                        return [post.tag];
                    }
                    return ["기타"];
                }),
            ),
        );
    }, [posts]);

    const grouped = useMemo(() => {
        return posts.reduce((acc, post) => {
            const postTags =
                post.tags && post.tags.length > 0
                    ? post.tags
                    : post.tag
                        ? [post.tag]
                        : ["기타"];
            postTags.forEach((tag) => {
                if (!acc[tag]) {
                    acc[tag] = [];
                }
                acc[tag].push(post);
            });
            return acc;
        }, {} as Record<string, Post[]>);
    }, [posts]);

    const visiblePosts =
        selectedTag && grouped[selectedTag] ? grouped[selectedTag] : posts;

    if (isLoading) {
        return (
            <FadeInWrapper>
                <DivVelogWrapper>
                    <StatusCard>Loading Velog posts...</StatusCard>
                </DivVelogWrapper>
            </FadeInWrapper>
        );
    }

    if (error) {
        return (
            <FadeInWrapper>
                <DivVelogWrapper>
                    <StatusCard>Failed to load Velog posts</StatusCard>
                </DivVelogWrapper>
            </FadeInWrapper>
        );
    }

    if (postId) {
        const selectedPost = posts.find((post) => post.id === postId) || null;

        if (!selectedPost) {
            return null;
        }

        const primaryTag =
            selectedPost.tag || selectedPost.tags?.[0] || "기타";
        const { cleanedMarkdown, releasedAt, extractedTags } =
            extractVelogMeta(selectedPost.description);
        const releaseLabel =
            formatDateLabel(releasedAt) ||
            moment(selectedPost.pubDate).format("YYYY-MM-DD");
        const tagsForChips =
            extractedTags.length > 0
                ? extractedTags
                : selectedPost.tags && selectedPost.tags.length > 0
                  ? selectedPost.tags
                  : [primaryTag];

        return (
            <FadeInWrapper>
                <DivVelogWrapper>
                    <DivMarkdownWrapper>
                        <DivPostHeader>
                            <MetaRow>
                                {releaseLabel}
                            </MetaRow>
                                <SpanPostTitle>{selectedPost.title}</SpanPostTitle>
                            <MetaRow>
                                {tagsForChips.map((tag) => (
                                    <TagChip
                                        key={tag}
                                        href={`https://velog.io/tags/${encodeTagSlug(tag)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {tag}
                                    </TagChip>
                                ))}
                            </MetaRow>
                        </DivPostHeader>
                        <MarkDownPostRenderer
                            post={selectedPost}
                            markdown={cleanedMarkdown}
                        />
                    </DivMarkdownWrapper>
                </DivVelogWrapper>
            </FadeInWrapper>
        );
    }

    return (
        <FadeInWrapper>
            <VelogTagWrapper
                setSelectedTag={setSelectedTag}
                selectedTag={selectedTag}
                tags={tags}
            />
            <VelogWrapper
                posts={visiblePosts}
                onSelect={(post) => navigate(`/velog/${post.id}`)}
            />
        </FadeInWrapper>
    );
}

export default Velog;

function formatDateLabel(input: string | null) {
    if (!input) return null;
    const match = input.match(/\d{4}-\d{2}-\d{2}/);
    return match ? match[0] : null;
}

function extractVelogMeta(markdown: string) {
    const releasedMatch = markdown.match(/^released at\s+(.+)$/im);
    const releasedAt = releasedMatch ? releasedMatch[1].trim() : null;
    const extractedTags = Array.from(
        new Set(
            Array.from(
                markdown.matchAll(
                    /\[([^\]]+)\]\(https?:\/\/velog\.io\/tags\/[^)]+\)/gi,
                ),
            ).map((match) => match[1].trim()),
        ),
    );

    let cleaned = markdown;
    cleaned = cleaned.replace(/^\[Velog.*\n\n?/im, "");
    cleaned = cleaned.replace(/^released at.*\n\n?/gim, "");
    cleaned = cleaned.replace(/^updated at.*\n\n?/gim, "");
    cleaned = cleaned.replace(/\|.*velog\.io\/tags.*\n\|[-|:\s]+\n?/im, "");
    cleaned = cleaned.replace(/\*\*`(.+?)`\*\*/g, "`$1`");

    return {
        cleanedMarkdown: cleaned.trim(),
        releasedAt,
        extractedTags,
    };
}

function encodeTagSlug(tag: string) {
    return tag.trim().replace(/\s+/g, "-");
}

const FadeInWrapper = styled.div`
    animation: fadeIn 0.5s ease-in;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(1.25rem); /* 20px */
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
