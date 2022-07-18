import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Calendar from "react-calendar";

const MainUpper = () => {
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
  const [value, onChange] = useState(new Date());
  function formatDate(date, temp) {
    const tempDate = date.toDateString();
    return tempDate.slice(0, 2);
  }
  return (
    <>
      <div
        id="header-main"
        onClick={() => {
          const cardMain = document.querySelector(".card-main");
          cardMain.classList.toggle("card-main-with-calendar");
        }}
      >
        <div>
          <AiOutlineLeft />
          {new Date().getFullYear()}
          <button>
            {months[new Date().getMonth()]} <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        <div className="roboto-reg">
          <FaUserCircle id="user-icon"/>
          User
        </div>
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
