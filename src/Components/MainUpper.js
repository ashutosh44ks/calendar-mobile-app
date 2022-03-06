import { useState, useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Calendar from "react-calendar";

const MainUpper = ( {currMonth} ) => {
  const [value, onChange] = useState(new Date());
  function formatDate(date, temp) {
    const tempDate = date.toDateString();
    return tempDate.slice(0, 2);
  }
  useEffect(() => {
    const calendarDay = document.querySelectorAll(
      ".react-calendar__month-view__days__day"
    );
    var d = new Date();
    var date = d.getDate();
    var day = d.getDay();
    var weekOfMonth = Math.ceil((date - 1 - day) / 7) - 1;
    for (let i = 0; i < weekOfMonth * 7; i++) {
      calendarDay[i].classList.add("none");
    }
  });
  return (
    <>
      <div id="header-main">
        <div>
          <AiOutlineLeft />
          {new Date().getFullYear()}
          <button>
            {currMonth} <MdOutlineKeyboardArrowDown />
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
