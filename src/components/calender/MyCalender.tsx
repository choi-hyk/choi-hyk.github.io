import {
    Calendar,
    Views,
    dateFnsLocalizer,
    Event as RBCEvent,
    View,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalenderWrapper from "./MyCalender.styles";
import { useState } from "react";

const locales = {
    en: enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
    getDay,
    locales,
});

const MyCalendar = () => {
    const [view, setView] = useState<View>(Views.MONTH);
    const [date, setDate] = useState(new Date());

    return (
        <CalenderWrapper>
            <Calendar
                localizer={localizer}
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
                events={[]}
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
