import { useState } from "react";
import "./navbar.css";

export default function Navigation() {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleVisibilty = () => {
    setMenuVisibility(!isMenuVisible);
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      toggleVisibilty();
    } else {
      console.warn(`Element with id "${element}" not found`);
    }
  };

  return (
    <div className={`nav-header ${isMenuVisible ? "color-nav" : ""}`}>
      <h3>
        <a href="/">Jeffrey Nguyen</a>
      </h3>

      <div className={`nav-showable ${isMenuVisible ? "nav-show" : ""}`}>
        <div className="nav-space">
          <div className="nav-item">
            <button onClick={scrollToAbout} className="nav-btn">
              About Me
            </button>
          </div>
          <div className="nav-item">
            <button className="nav-btn">Technologies</button>
          </div>
          <div className="nav-item">
            <button className="nav-btn">Resume</button>
          </div>
          <div className="nav-item">
            <button className="nav-btn">Projects</button>
          </div>
        </div>
      </div>
      <button className="hamburger-btn nav-item" onClick={toggleVisibilty}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          ></path>
        </svg>
      </button>
    </div>
  );
}
