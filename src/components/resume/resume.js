import React from "react";
import { Link } from "react-router-dom";
import Technologies from "../technologies/technologies";
import resumeFile from "./Jeff_s_Resume.pdf";
import "./resume.css";

export default function Resume() {
  return (
    <div className="resume-section">
      <div className="resume-container" id="resume">
        <div className="dload-container">
          <Link
            to={resumeFile}
            target="_blank"
            download="Jeffrey Ethan Nguyen.pdf"
            style={{ textDecoration: "none" }}
          >
            <button className="download">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
              </svg>{" "}
              Download Resume
            </button>
          </Link>
        </div>
        <header style={{ textAlign: "center", marginBottom: "20px" }}>
          <h3>Jeffrey Ethan Nguyen</h3>
          <div>
            <p>Los Angeles, CA | 323-441-3053</p>
          </div>
          <p>
            <Link className="res-link" to="mailto:jeffreyenguyen@gmail.com">
              jeffreyenguyen@gmail.com
            </Link>{" "}
            |{" "}
            <Link
              className="res-link"
              to="https://linkedin.com/in/jeffrey-ethan-nguyen-828a04217/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>{" "}
            |{" "}
            <Link
              className="res-link"
              to="https://github.com/jeffreen0322"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </p>
        </header>

        {/* Education Section */}
        <section style={{ marginBottom: "20px" }}>
          <h5>Education</h5>
          <hr className="divider"></hr>
          <p>
            <strong>University of California, Irvine</strong> — Irvine, CA
          </p>
          <p>Bachelor of Science in Computer Science, Graduation: June 2024</p>
          <ul>
            <li>
              User Interaction Software, Introduction to Data Management,
              Project in Databases and Web Applications, Information Retrieval,
              Data Structures Implementation and Analysis, Human Computer
              Interaction, Software Design: Applications, Next Generation Search
              Systems
            </li>
          </ul>
        </section>

        {/* Technical Skills Section */}
        <section style={{ marginBottom: "20px" }}>
          <h5>Technical Skills</h5>
          <hr className="divider"></hr>

          <ul>
            <li>
              <strong>Languages:</strong>
              {` Java, Python, JavaScript (JS),
              HTML/CSS, C/C++, MySQL, PostgreSQL, Typescript`}
            </li>
            <li>
              <strong>Frameworks:</strong> React, Angular, IONIC, JSON, NodeJS,
              ExpressJS, JQuery, AJAX, JSON, JUnit
            </li>
            <li>
              <strong>Developer Tools:</strong> VSCode, Git, ChatGPT, Jira,
              Eclipse, Figma, Bash, IDLE, IntelliJ, Vercel, Linux, Canva
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section style={{ marginBottom: "20px" }}>
          <h5>Projects</h5>
          <hr className="divider"></hr>

          <div>
            <p>
              <strong>Personal Website</strong> | June 2022 – Present
            </p>
            <ul>
              <li>
                Created a professional portfolio website using React, CSS, and
                JavaScript.
              </li>
              <li>
                Hosted on Vercel, featuring projects, repositories, socials, and
                skills.
              </li>
            </ul>
          </div>
          <div>
            <p>
              <strong>Anibrowser</strong> | April 2024 – Present
            </p>
            <ul>
              <li>
                Developed a website for browsing and searching anime/manga
                titles using the Jikan API.
              </li>
              <li>
                Implemented UI with React and managed 20+ components across 6
                unique pages.
              </li>
              <li>
                Introduced genre-based and string-based search functionalities.
              </li>
            </ul>
          </div>
          <div>
            <p>
              <strong>Sleeptracker</strong> | February 2024 – March 2024
            </p>
            <ul>
              <li>
                Designed a sleep tracking application with calendar-based
                logging and local storage.
              </li>
              <li>
                Enhanced usability with error prevention methods and cached
                records for review.
              </li>
            </ul>
          </div>
          <div>
            <p>
              <strong>Fabflix</strong> | April 2023 – June 2023
            </p>
            <ul>
              <li>
                Full-stack web application for cataloging films with advanced
                filtering and analytics.
              </li>
              <li>
                Implemented prepared statements to protect against SQL injection
                attacks.
              </li>
              <li>
                Reduced query times with client-side caching infrastructure.
              </li>
            </ul>
          </div>
          <div>
            <p>
              <strong>Tile Game Engine</strong> | January 2024 – March 2024
            </p>
            <ul>
              <li>
                Developed a game engine for tile-based games with support for
                multiple user accounts.
              </li>
              <li>
                Implemented Unity-style Vector2 for GUI-to-array transformations
                of grid positions.
              </li>
            </ul>
          </div>
        </section>
      </div>

      <Technologies />
    </div>
  );
}
