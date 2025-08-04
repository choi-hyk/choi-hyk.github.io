import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function ping() {
    const res = await axios.get(`${API_BASE_URL}/ping`);
    return res.data;
}

// Calender------------------------------------------------------------------------
export async function fetchEvents() {
    const res = await axios.get(`${API_BASE_URL}/events`);
    return res.data;
}

export async function createEvent(event: {
    title: string;
    start: string;
    end: string;
    description: string;
}) {
    const res = await axios.post(`${API_BASE_URL}/events`, event);
    return res.data;
}

export interface Event {
    id: number;
    title: string;
    start: string | Date;
    end: string | Date;
    description: string;
}

// GitHub------------------------------------------------------------------------
export async function fetchGitHub() {
    const profile = await axios.get(`${API_BASE_URL}/github/profile`);
    const repoData = await axios.get(`${API_BASE_URL}/github/repo`);
    const data = repoData.data;
    const repos = data.repositories || [];
    const issues = data.issues || [];
    const pullRequests = data.pullRequests || [];

    return {
        profile: profile.data,
        repos: repos,
        issues: issues,
        pullRequests: pullRequests,
    };
}

export interface Profile {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company: string;
    location: string;
    public_repos: number;
    followers: number;
    following: number;
}

export interface Repository {
    id: number;
    name: string;
    html_url: string;
    open_issues_count: number;
}

export interface Issue {
    id: number;
    number: number;
    title: string;
    html_url: string;
    repoName: string;
}

export interface PullRequest {
    id: number;
    number: number;
    title: string;
    html_url: string;
    repoName: string;
    state: string;
}

// Velog----------------------------------------------------------------------------
export async function fetchVelog() {
    const res = await axios.get(`${API_BASE_URL}/velog`);
    return (res.data as Post[]).sort((a, b) => a.id - b.id);
}

export interface Post {
    id: number;
    tag?: string;
    title: string;
    link: string;
    pubDate: string;
    description: string;
}
