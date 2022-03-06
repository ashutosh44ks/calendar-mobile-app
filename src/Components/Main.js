import "../Stylesheets/MainUpper.css";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import MainUpper from "./MainUpper";
import MainLower from "./MainLower";
import AddEvent from "./AddEvent";

const Main = () => {
  const [eventCount, setEventCount] = useState(3);
  const [addEventToggle, setAddEventToggle] = useState(false);
  const [events, setEvents] = useState([
    {
      title: "Design Scrum",
      participants: "10",
      time: "11:00am",
      timeLeft: "45mins",
      callCode: "456 676 7889",
    },
    {
      title: "Q2 Planning",
      participants: "5",
      time: "01:20pm",
      timeLeft: "60mins",
      callCode: "123 456 7890",
    },
    {
      title: "Coldplay Concert",
      participants: "2",
      time: "09:20pm",
      timeLeft: "120mins",
      callCode: "N/A",
    },
  ]);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currMonth = months[new Date().getMonth()];
  return (
    <>
      <MainUpper currMonth={currMonth}/>
      <MainLower eventCount={eventCount} events={events} setToggle={setAddEventToggle} />
      {addEventToggle?<AddEvent setToggle={setAddEventToggle} />:""}      
    </>
  );
};

export default Main;
