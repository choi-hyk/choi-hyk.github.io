import { useState } from "react";
import { isSameDay } from "date-fns";
import { Calendar, Views, View, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalenderWrapper from "./MyCalender.styles";
import { Event } from "../../api";

const localizer = momentLocalizer(moment);

interface MyCalendarProps {
    events?: Event[];
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
}

const MyCalendar = ({
    events,
    selectedDate,
    setSelectedDate,
}: MyCalendarProps) => {
    const [view, setView] = useState<View>(Views.MONTH);
    const [date, setDate] = useState(new Date());

    const handleSelectSlot = (slotInfo: any) => {
        setSelectedDate(slotInfo.start);
    };

    const dayPropGetter = (day: Date) => {
        if (isSameDay(day, selectedDate)) {
            return {
                style: {
                    backgroundColor: "#fff5d1",
                    border: "1px solid #f1c40f",
                },
            };
        }
        return {};
    };

    return (
        <CalenderWrapper>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelectSlot}
                view={view}
                views={[Views.MONTH, Views.WEEK, Views.DAY]}
                defaultView={Views.MONTH}
                onView={(v) => setView(v)}
                date={date}
                onNavigate={(newDate) => setDate(newDate)}
                dayPropGetter={dayPropGetter}
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
