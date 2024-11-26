import { userInfo } from "./about-info";
import "./about.css";

export default function About() {
  return (
    <div className="about" id="about-section">
      <div className="uci-logo">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/8/88/UCI_Anteaters_logo.png"
          alt="UCI logo"
        />
      </div>
      <div className="intro-story">
        <h2>About Me</h2>
        <p>{userInfo.sen1}</p>
        <p>{userInfo.sen2}</p>
        <p>{userInfo.sen3}</p>
      </div>
    </div>
  );
}
