import styled from "styled-components";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const CalendarWrapper = styled.div`
    width: 60%;
    height: 150%;
    padding: 1rem;

    .rbc-toolbar {
        padding: 12px;
        font-weight: bold;
    }

    .rbc-calendar {
        background-color: var(--secondary-color);
        border: 3px solid var(--primary-color);
        color: var(--terminal_path_bar_color);
    }

    .rbc-month-view {
        border-top: 2px solid var(--secondary-border-color);
    }

    .rbc-today {
        background-color: #b6a1a1ff;
    }

    .rbc-off-range {
        color: #aaa;
    }

    .rbc-time-view {
        border: 2px solid #e0e0e0;
    }

    .rbc-header {
        color: var(--terminal_path_bar_color);
        font-weight: bold;
    }

    .rbc-event {
        color: white;
        background-color: #007bff;
    }

    .rbc-date-cell {
        color: var(--terminal_path_bar_color);
    }

    .rbc-btn-group {
        overflow: hidden;
        display: inline-flex;
        transition: box-shadow 0.2s ease-in-out;
        background-color: #907b7bff;
    }

    .rbc-btn-group button {
        background: transparent;
        border: 1px solid #6e5e5e;
        color: white;
        padding: 6px 10px;
        cursor: pointer;
        font-weight: 500;
        transition: background-color 0.2s ease-in-out;
    }

    .rbc-btn-group button:hover {
        background-color: #6e5e5e;
        color: #fff;
    }

    .rbc-btn-group .rbc-active {
        background-color: #ffffff;
        color: #907b7b;
        font-weight: bold;
        border-radius: 2px;
    }
`;

export default CalendarWrapper;
