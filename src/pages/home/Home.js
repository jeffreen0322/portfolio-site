import About from "../../components/about/about";
import Socials from "../../components/socials/socials";
import Resume from "../../components/resume/resume";
import Projects from "../../components/projects/projects";
import jeffImg from "./assets/jeff.png";
import "./Home.css";

export default function HomePage() {
  return (
    <div className="home">
      <Pitch />
      <About />
      <Resume />
      <Projects />
    </div>
  );
}

function Pitch() {
  return (
    <div className="pitch">
      <IntroHeader />
      <Details />
    </div>
  );
}

function IntroHeader() {
  return (
    <div
      className="fronter
    "
    >
      <div className="name">
        <h1 className="text intro">
          <span className="normal">Hello, I'm </span>
          <span style={{ color: "#B5C6E0" }}>Jeffrey</span>
          <span className="normal">!</span>
        </h1>
        <h1 className="text occupation normal">I'm an Aspring</h1>

        <h1 className="text occupation-2">
          <span style={{ color: "#B5C6E0" }}>Software Developer</span>
          <span className="normal">!</span>
        </h1>
      </div>
      <Socials />
    </div>
  );
}

function Details() {
  return (
    <div className="personal">
      <img className="intro-image" src={jeffImg} alt="Jeffrey" />
    </div>
  );
}
