import {
    DivEventDate,
    DivEventDescription,
    DivEventInfo,
    DivEventsContainer,
    DivEventTitle,
} from "./EventInfo.styles";
import moment from "moment";
import { Event } from "../../api/api";

function EventInfo({ events }: { events: Event[] | undefined }) {
    if (!events || events.length === 0) {
        return null;
    }
    return (
        <DivEventsContainer>
            {events.map((ev) => (
                <DivEventInfo key={ev.id}>
                    <DivEventTitle>{ev.title}</DivEventTitle>
                    <DivEventDate>
                        <span style={{ color: "var(--secondary-text-color)" }}>
                            {moment(ev.start).format("MMM DD, YYYY HH:mm")}
                        </span>
                        <span> ~ </span>
                        <span style={{ color: "var(--tertiary-text-color)" }}>
                            {moment(ev.end).format("MMM DD, YYYY HH:mm")}
                        </span>
                    </DivEventDate>
                    <DivEventDescription>{ev.description}</DivEventDescription>
                </DivEventInfo>
            ))}
        </DivEventsContainer>
    );
}

export default EventInfo;
