import { useEffect, useState } from "react";
import { DivWrapper } from "./Calender.styles";
import { Event } from "../../api";
import MyCalendar from "../../components/calender/MyCalender";
import { MarkdownRenderer } from "../../components/markdown/MarkDown";
import EventInfo from "../../components/event/EventInfo";
import { useEvents } from "../../useApi";

function Calender() {
    const { data, error, isLoading } = useEvents();
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedEvents, setSelectedEvents] = useState<Event[] | undefined>(
        []
    );
    useEffect(() => {
        if (!data) return;
        const parsed = data.map((e: Event) => ({
            ...e,
            start: new Date(e.start),
            end: new Date(e.end),
        }));
        const filtered = parsed.filter((event: Event) => {
            const s = event.start as Date;
            const e = event.end as Date;
            return (
                s.getFullYear() <= selectedDate.getFullYear() &&
                s.getMonth() <= selectedDate.getMonth() &&
                s.getDate() <= selectedDate.getDate() &&
                e.getFullYear() >= selectedDate.getFullYear() &&
                e.getMonth() >= selectedDate.getMonth() &&
                e.getDate() >= selectedDate.getDate()
            );
        });
        setSelectedEvents(filtered);
    }, [selectedDate, data]);

    if (error) return null;
    if (isLoading || !data) return null;
    const events = data;

    return (
        <>
            <MarkdownRenderer page="calender" />
            <DivWrapper>
                <MyCalendar
                    events={events}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
                <EventInfo events={selectedEvents} />
            </DivWrapper>
        </>
    );
}

export default Calender;
