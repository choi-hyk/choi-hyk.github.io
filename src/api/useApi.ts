import { useState, useEffect } from "react";
import { fetchGitHub, fetchHippoboxReadme, fetchVelog } from "./api";
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

// HippoBox
export function useHippoboxReadme() {
    const [data, setData] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchHippoboxReadme()
            .then((result) => {
                setData(result);
                setIsLoading(false);
            })
            .catch(() => {
                setError("Failed to load HippoBox README");
                setIsLoading(false);
            });
    }, []);

    return { data, error, isLoading };
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
