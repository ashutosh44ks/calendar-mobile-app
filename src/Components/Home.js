import { HiArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "../Stylesheets/Home.css"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div id="heading">
        Calendar <span>{new Date().getFullYear()}</span>
      </div>
      <div id="bg-pic"></div>
      <div id="welcome">
        <div id="welcome-content">
          <h2> Hi Aman,</h2>
          <div>
            Welcome to your daily event calendar. Be more engaging &
            personalised than ever before. We’ll help you in{" "}
            <span>
              Tracking Upcoming Events, Scheduling Meetings & Creating New
              Event!
            </span>
          </div>
        </div>
        <button onClick={()=>navigate("/calendar-mobile-app/main")}>
          <HiArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default Home;
