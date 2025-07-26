import { useEffect, useState } from "react";
import {
    Calendar,
    Views,
    Event as RBCEvent,
    View,
    momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalenderWrapper from "./MyCalender.styles";
import { fetchEvents } from "../../api";

const localizer = momentLocalizer(moment);

interface Event {
    id: number;
    title: string;
    start: string | Date;
    end: string | Date;
}

const MyCalendar = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [view, setView] = useState<View>(Views.MONTH);
    const [date, setDate] = useState(new Date());

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

    return (
        <CalenderWrapper>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                view={view}
                views={[Views.MONTH, Views.WEEK, Views.DAY]}
                defaultView={Views.MONTH}
                onView={(v) => setView(v)}
                date={date}
                onNavigate={(newDate) => setDate(newDate)}
                popup
                culture="en"
                messages={{
                    today: "today",
                    previous: "previous",
                    next: "next",
                    month: "month",
                    week: "week",
                    day: "day",
                    agenda: "agenda",
                    date: "date",
                    time: "time",
                    event: "event",
                    noEventsInRange: "no events",
                }}
            />
        </CalenderWrapper>
    );
};

export default MyCalendar;
