import { useEffect, useState } from "react";
import { DivWrapper } from "./Calender.styles";
import { fetchEvents, Event } from "../../api";
import MyCalendar from "../../components/calender/MyCalender";
import { MarkdownRenderer } from "../../components/markdown/MarkDown";
import EventInfo from "../../components/event/EventInfo";

function Calender() {
    const [events, setEvents] = useState<Event[] | undefined>([]);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedEvents, setSelectedEvents] = useState<Event[] | undefined>(
        []
    );

    useEffect(() => {
        fetchEvents().then((events) => {
            const parsed = events.map((e: Event) => ({
                ...e,
                start: new Date(e.start),
                end: new Date(e.end),
            }));
            setEvents(parsed);
        });
    }, []);

    useEffect(() => {
        if (!events) return;

        const filtered = events.filter((event) => {
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
    }, [selectedDate, events]);

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
