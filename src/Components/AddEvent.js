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

const AddEvent = ({ setToggle }) => {
  const [switchToggle, setSwitchToggle] = useState(false);
  return (
    <div id="add-event-card">
      <div id="add-event-card-head">
        <button onClick={() => setToggle(false)}>
          <GrClose />
        </button>
        New Event
      </div>
      <div id="add-event-card-body">
        <input placeholder="Add Title" />
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
            Thursday, 21 September <span>02:30pm</span>
          </div>
          <div className="add-event-toggle-div">
            Thursday, 21 September <span>03:30pm</span>
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
      </div>
    </div>
  );
};

export default AddEvent;
