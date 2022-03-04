import "../Stylesheets/AddEvent.css";
import { GrClose } from "react-icons/gr";
import { IoIosPeople, IoIosAttach } from "react-icons/io";
import {
  AiOutlineClockCircle,
  AiOutlineFileDone,
  AiOutlineRight,
} from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const AddEvent = () => {
  return (
    <div id="add-event-card" className="card-main">
      <div id="add-event-card-head">
        <GrClose />
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
        <section>
          <div>
            <AiOutlineClockCircle />
            All Day
          </div>
          <AiOutlineRight />
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
