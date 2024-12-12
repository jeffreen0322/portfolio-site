import React from "react";
import "./label.css";

export function TagToggle({ tech }) {
  return (
    <div className="tag-container">
      <div className="tag-label">{tech}</div>
    </div>
  );
}
