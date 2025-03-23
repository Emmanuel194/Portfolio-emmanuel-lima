import React from "react";

function ProjectCard({ title, description, link }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem",
        maxWidth: "300px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Visitar
      </a>
    </div>
  );
}

export default ProjectCard;
