import ProjectItem from "./project-item";
import { projects } from "./project-data";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="project-section">
      <h2>Projects</h2>
      <div className="samples">
        {projects.map((sampleInfo, index) => (
          <ProjectItem key={index} info={sampleInfo} />
        ))}
      </div>
    </div>
  );
}
