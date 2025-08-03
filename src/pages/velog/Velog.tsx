import { useEffect, useState } from "react";
import { VelogTagWrapper, VelogWrapper } from "../../components/velog/velog";
import { Post } from "../../api/api";
import { MarkdownRenderer } from "../../components/markdown/MarkDown";
import { useVelog } from "../../api/useApi";

function Velog() {
    const { data, error, isLoading } = useVelog();
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [isMarkdownLoaded, setIsMarkdownLoaded] = useState(false);

    useEffect(() => {
        if (data && data.length > 0 && !selectedPost) {
            setSelectedPost(data[0]);
        }
    }, [data, selectedPost]);

    if (error) return null;

    const posts = data || [];
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
            <MarkdownRenderer
                page="velog"
                onLoad={() => setIsMarkdownLoaded(true)}
            />

            {!isLoading && data && isMarkdownLoaded && (
                <>
                    <VelogTagWrapper
                        setSelectedTag={setSelectedTag}
                        selectedTag={selectedTag}
                        tags={tags}
                    />
                    <VelogWrapper
                        visiblePosts={visiblePosts}
                        selectedPost={selectedPost}
                        setSelectedPost={setSelectedPost}
                    />
                </>
            )}
        </>
    );
}

export default Velog;
