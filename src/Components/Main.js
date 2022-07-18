import "../Stylesheets/MainUpper.css";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import MainUpper from "./MainUpper";
import MainLower from "./MainLower";
import AddEvent from "./AddEvent";

const Main = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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
  return (
    <>
      <MainUpper />
      <MainLower
        eventCount={eventCount}
        events={events}
        setToggle={setAddEventToggle}
        days={days}
      />
      {addEventToggle ? (
        <AddEvent
          setToggle={setAddEventToggle}
          events={events}
          setEvents={setEvents}
          days={days}
          setEventCount={setEventCount}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Main;
