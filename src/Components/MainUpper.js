import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Calendar from "react-calendar";

const MainUpper = () => {
  const [value, onChange] = useState(new Date());
  function formatDate(date, temp) {
    const tempDate = date.toDateString();
    return tempDate.slice(0, 2);
  }
  return (
    <>
      <div id="header-main">
        <div>
          <AiOutlineLeft />
          {new Date().getFullYear()}
          <button>
            September <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        <FaUserCircle id="user-icon" />
      </div>
      <div id="calendar">
        <Calendar
          onChange={onChange}
          value={value}
          showNavigation={false}
          formatShortWeekday={(locale, date) => formatDate(date, "dd")}
        />
      </div>
    </>
  );
};

export default MainUpper;
