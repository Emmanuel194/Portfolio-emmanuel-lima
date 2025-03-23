import React from "react";

function Projects() {
  const projects = [
    {
      title: "Projeto 1",
      description: "Breve descrição do projeto 1.",
      image: "/path-to-image1.jpg",
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
      <h2 style={{ textAlign: "center" }}>PROJETOS</h2>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              textAlign: "center",
              maxWidth: "300px",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "0.5rem",
              }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
