import React from "react";
import projeto1 from "../assets/images/projeto1.jpeg";

function Projects() {
  const projects = [
    {
      title: "Projeto 1",
      description: "Breve descrição do projeto 1.",
      image: projeto1,
      link: "https://github.com/emmanuellima/projeto1",
    },
    {
      title: "Projeto 2",
      description: "Breve descrição do projeto 2.",
      image: "/path-to-image2.jpg",
      link: "https://github.com/emmanuellima/projeto2",
    },
    {
      title: "Projeto 3",
      description: "Breve descrição do projeto 3.",
      image: "/path-to-image3.jpg",
      link: "https://github.com/emmanuellima/projeto3",
    },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h2
        style={{
          color: "rgba(77, 184, 255, 1)",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        PROJETOS
      </h2>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "0.5rem",
              }}
            />
            <h3 style={{ color: "rgba(242, 245, 248, 1)", fontWeight: "bold" }}>
              {project.title}
            </h3>
            <p style={{ color: "rgba(242, 245, 248, 0.8)" }}>
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              style={{
                textDecoration: "none",
              }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  padding: "5px",
                }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
