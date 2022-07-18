import "../Stylesheets/AddEvent.css";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { IoIosPeople, IoIosAttach } from "react-icons/io";
import {
  AiOutlineClockCircle,
  AiOutlineFileDone,
  AiOutlineRight,
} from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const AddEvent = ({ setToggle, events, setEvents, days, setEventCount }) => {
  const [switchToggle, setSwitchToggle] = useState(false);
  const [title, setTitle] = useState("");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <div id="bg-for-card"></div>
      <div id="add-event-card">
        <div id="add-event-card-head">
          <button onClick={() => setToggle(false)}>
            <GrClose />
          </button>
          New Event
        </div>
        <div id="add-event-card-body">
          <input
            placeholder="Add Title"
            autoFocus
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <section>
            <div>
              <IoIosPeople />
              Invite People
            </div>
            <AiOutlineRight />
          </section>
          <section className="open">
            <div>
              <AiOutlineClockCircle />
              All Day
              <button onClick={() => setSwitchToggle(!switchToggle)}>
                {switchToggle ? <BsToggleOn /> : <BsToggleOff />}
              </button>
            </div>
            <div className="add-event-toggle-div">
              {days[new Date().getDay()]}, {new Date().getUTCDate()}{" "}
              {months[new Date().getMonth()]} <span>02:30pm</span>
            </div>
            <div className="add-event-toggle-div">
              {days[new Date().getDay()]}, {new Date().getUTCDate()}{" "}
              {months[new Date().getMonth()]} <span>03:30pm</span>
            </div>
          </section>
          <section>
            <div>
              <IoLocationOutline />
              Location
            </div>
            <AiOutlineRight />
          </section>
          <section>
            <div>
              <AiOutlineFileDone />
              Agenda
            </div>
            <AiOutlineRight />
          </section>
          <section>
            <div>
              <IoIosAttach />
              Add Attachment
            </div>
            <AiOutlineRight />
          </section>
          <div id="add-event-card-btn-parent">
            <button
              id="add-event-card-btn"
              onClick={() => {
                setEvents([
                  ...events,
                  {
                    title: title,
                    participants: "10",
                    time: "11:00am",
                    timeLeft: "45mins",
                    callCode: "456 676 7889",
                  },
                ]);
                setEventCount((eventCount) => eventCount + 1);
                setToggle(false);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEvent;
