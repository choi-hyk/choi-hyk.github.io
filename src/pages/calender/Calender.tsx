import MyCalendar from "../../components/calender/MyCalender";
import MarkdownRenderer from "../../components/markdown/MarkDown";

function Calender() {
    return (
        <>
            <MarkdownRenderer page="calender" />
            <MyCalendar />
        </>
    );
}

export default Calender;
