import React from "react";

function Technologies() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "rgba(77, 184, 255, 1)", fontWeight: "bold" }}>
        TECNOLOGIAS
      </h2>
      <p style={{ marginBottom: "2rem", color: "rgba(242, 245, 248, 0.8)" }}>
        Tecnologias nas quais atuo.
      </p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          className="technology-card"
          style={{
            flex: 1,
            marginRight: "1rem",
            padding: "1rem",
            borderRadius: "8px",
            backgroundColor: "rgba(51, 51, 51, 0.8)",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s ease, border-color 0.2s ease",
          }}
        >
          <h3 style={{ color: "rgba(242, 245, 248, 1)", fontWeight: "bold" }}>
            <span style={{ color: "rgba(77, 184, 255, 1)" }}>+ </span>
            Ferramentas
          </h3>
          <ul>
            <li style={{ color: "rgba(242, 245, 248, 0.8)" }}>VS Code</li>
            <li style={{ color: "rgba(242, 245, 248, 0.8)" }}>Git</li>
            <li style={{ color: "rgba(242, 245, 248, 0.8)" }}>GitHub</li>
            <li style={{ color: "rgba(242, 245, 248, 0.8)" }}>Figma</li>
          </ul>
        </div>

        <div
          className="technology-card"
          style={{
            flex: 1,
            margin: "0 1rem",
            padding: "1rem",
            borderRadius: "8px",
            backgroundColor: "rgba(51, 51, 51, 0.8)",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s ease, border-color 0.2s ease",
          }}
        >
          <h3 style={{ color: "rgba(242, 245, 248, 1)", fontWeight: "bold" }}>
            <span style={{ color: "rgba(77, 184, 255, 1)" }}>+ </span>
            Frameworks
          </h3>
          <ul>
            <li style={{ color: "rgba(242, 245, 248, 0.8)" }}>React</li>
            <li style={{ color: "rgba(242, 245, 248, 0.8)" }}>Tailwind</li>
          </ul>
        </div>

        <div
          className="technology-card"
          style={{
            flex: 1,
            marginLeft: "1rem",
            padding: "1rem",
            borderRadius: "8px",
            backgroundColor: "rgba(51, 51, 51, 0.8)",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s ease, border-color 0.2s ease",
          }}
        >
          <h3 style={{ color: "rgba(242, 245, 248, 1)", fontWeight: "bold" }}>
            <span style={{ color: "rgba(77, 184, 255, 1)" }}>+ </span>
            Linguagens
          </h3>
          <ul>
            <li style={{ color: "rgba(242, 245, 248, 0.8)" }}>JavaScript</li>
            <li style={{ color: "rgba(242, 245, 248, 0.8)" }}>HTML/CSS</li>
            <li style={{ color: "rgba(242, 245, 248, 0.8)" }}>UI/UX Design</li>
            <li style={{ color: "rgba(242, 245, 248, 0.8)" }}>Python</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
