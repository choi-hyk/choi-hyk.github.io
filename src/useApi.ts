import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { fetchEvents, fetchGitHub, fetchVelog, createEvent, ping } from "./api";

// ping
export function usePing() {
    return useSWR("ping", ping, { revalidateOnFocus: false });
}

// Calendar
export function useEvents() {
    return useSWR("events", fetchEvents, { revalidateOnFocus: false });
}

export function useCreateEvent() {
    return useSWRMutation(
        "events",
        async (key, { arg }: { arg: Parameters<typeof createEvent>[0] }) => {
            return await createEvent(arg);
        }
    );
}

// GitHub
export function useGitHub() {
    return useSWR("github-data", fetchGitHub, {
        revalidateOnFocus: false,
        dedupingInterval: 1000 * 60 * 5,
    });
}

// Velog
export function useVelog() {
    return useSWR("velog", fetchVelog, { revalidateOnFocus: false });
}
