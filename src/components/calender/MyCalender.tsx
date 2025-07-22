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
import { useState } from "react";

const localizer = momentLocalizer(moment);

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
