import { Link } from "react-router-dom";
import Socials from "../socials/socials";
import "./footer.css";

export default function Footer() {
  const scrollToAbout = () => {
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with id "${element}" not found`);
    }
  };

  const scrollToResume = () => {
    const element = document.getElementById("resume");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with id "${element}" not found`);
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("project-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with id "${element}" not found`);
    }
  };

  return (
    <div className="footer-container">
      <h3>
        <Link to="/">Jeffrey Nguyen</Link>
      </h3>
      <Socials />

      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item" onClick={scrollToAbout}>
            About Me
          </li>
          <li className="nav-item" onClick={scrollToResume}>
            Resume
          </li>
          <li className="nav-item" onClick={scrollToProjects}>
            Projects
          </li>
        </ul>
      </div>
    </div>
  );
}
