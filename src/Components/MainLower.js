import "../Stylesheets/Main.css";
import { IoIosAddCircle } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { HiOutlineRefresh } from "react-icons/hi";

const MainLower = ({ eventCount, events }) => {
  function addEvent() {
    console.log("adder");
  }
  return (
    <div className="card-main">
      <div id="card-main-content">
        <div id="upcoming">
          <div className="times-bold"> Upcoming Events ({eventCount})</div>
          <div id="event-cards">
            {events.map((event, i) => (
              <div className="event-card">
                <div className="event-card-head">{event.title}</div>
                <div className="event-card-participants">
                  <FaUserCircle />
                </div>
                <div className="event-card-foot">
                  {event.time} <span>({event.timeLeft})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="days">
          <div id="today">
            <div className="times-bold">
              Today, <span className="times-reg">Friday 22</span>
              <div id="temp">
                <TiWeatherPartlySunny /> 31°/25°
              </div>
            </div>
            <div id="days-long">
              {events.map((event, i) => (
                <div className="event-card-long">
                  <div className="times">
                    {event.time} <span>{event.timeLeft}</span>
                  </div>
                  <div className="event-card-long-body">
                    <div className="event-card-long-head">
                      {event.title}
                      <HiOutlineRefresh />
                    </div>
                    <div className="event-card-long-participants">
                      <FaUserCircle />
                    </div>
                    <div className="event-card-long-foot">{event.callCode}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="tomorrow">
            <div className="times-bold">
              Tomorrow, <span className="times-reg">Saturday 22</span>
              <div id="temp">
                <TiWeatherPartlySunny /> 32°/27°
              </div>
            </div>
            <div id="tomorrow-body"> No Events </div>
          </div>
        </div>
      </div>
      <button onClick={() => addEvent()}>
        <IoIosAddCircle />
      </button>
    </div>
  );
};

export default MainLower;
