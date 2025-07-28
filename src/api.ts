import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function ping() {
    const res = await axios.get(`${API_BASE_URL}/ping`);
    return res.data;
}

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
