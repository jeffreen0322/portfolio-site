import React from "react";
import { skillInfo } from "./skills/skills";
import "./technologies.css";
import { Link } from "react-router-dom";

export default function Technologies() {
  return (
    <div className="technologies">
      {skillInfo.map((skill, index) => (
        <Link key={index} to={skill.url} className="stack-link">
          <div className="stack-container">
            <img src={skill.image} alt={skill.name} className="tech-icon" />
            <p>{skill.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
