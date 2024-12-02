import ProjectItem from "../projects/project-item";
import { currentWorks } from "./ongoing-works";
import "./ongoing.css";

export default function OngoingWorks() {
  return (
    <div className="ongoing-container" id="ongoing-section">
      <h2>Ongoing Projects & Certifications</h2>
      <div className="current-samples">
        {currentWorks.map((works, index) => (
          <ProjectItem key={index} info={works} />
        ))}
      </div>
    </div>
  );
}
