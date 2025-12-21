import { useState, useEffect } from "react";
import { fetchGitHub, fetchVelog } from "./api";
import type { Profile, Repository, Issue, PullRequest } from "./api";

interface GitHubData {
    profile: Profile | null;
    repos: Repository[];
    issues: Issue[];
    pullRequests: PullRequest[];
}

// GitHub
export function useGitHub() {
    const [data, setData] = useState<GitHubData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchGitHub()
            .then((result) => {
                setData(result);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, []);

    return { data, error: null, isLoading };
}

// Velog
export function useVelog() {
    const [data, setData] = useState<import("./api").Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchVelog()
            .then((result) => {
                setData(result);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, []);

    return { data, error: null, isLoading };
}
