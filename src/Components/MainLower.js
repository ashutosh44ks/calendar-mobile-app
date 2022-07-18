import "../Stylesheets/Main.css";
import { IoIosAddCircle } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdHorizontalRule, MdCancel } from "react-icons/md";

const MainLower = ({ eventCount, events, setEvents, setToggle, days }) => {
  return (
    <div className="card-main">
      <MdHorizontalRule id="horizontal-rule" onClick={()=>{
        const cardMain = document.querySelector(".card-main");
        cardMain.classList.toggle("card-main-with-calendar");
      }}/>
      <div id="card-main-content">
        <div id="upcoming">
          <div className="roboto-bold"> Upcoming Events ({eventCount})</div>
          <div id="event-cards">
            {events.map((event, i) => (
              <div className="event-card" key={event.key}>
                <div className="event-card-head">{event.title}</div>
                <div className="event-card-participants">
                  <FaUserCircle /> {`+${event.participants -1 } others`}
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
            <div className="roboto-bold">
              Today, <span className="roboto-reg">{days[new Date().getDay()]} 22</span>
              <div id="temp">
                <TiWeatherPartlySunny /> 31°/25°
              </div>
            </div>
            <div id="days-long">
              {events.map((event, i) => (
                <div className="event-card-long" key={event.key}>
                  <div className="roboto">
                    {event.time} <span>{event.timeLeft}</span>
                  </div>
                  <div className="event-card-long-body">
                    <div className="event-card-long-head">
                      {event.title}
                      <MdCancel onClick={()=>{
                        setEvents(events.filter((e, i) => e.key !== event.key));
                      }}/>
                    </div>
                    <div className="event-card-long-participants">
                      <FaUserCircle />
                      {`+${event.participants -1} others`}
                    </div>
                    <div className="event-card-long-foot">{event.callCode}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="tomorrow">
            <div className="roboto-bold">
              Tomorrow, <span className="roboto-reg">{days[new Date().getDay()+1]} 22</span>
              <div id="temp">
                <TiWeatherPartlySunny /> 32°/27°
              </div>
            </div>
            <div id="tomorrow-body"> No Events </div>
          </div>
        </div>
      </div>
      <button onClick={() => setToggle(true)}>
        <IoIosAddCircle />
      </button>
    </div>
  );
};

export default MainLower;
