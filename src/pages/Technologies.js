import React from "react";

function Technologies() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>TECNOLOGIAS</h2>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Tecnologias nas quais atuo.
      </p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: 1, marginRight: "1rem" }}>
          <h3>+ Ferramentas</h3>
          <ul>
            <li>VS Code</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Figma</li>
          </ul>
        </div>

        <div style={{ flex: 1, margin: "0 1rem" }}>
          <h3>+ Frameworks</h3>
          <ul>
            <li>React</li>
            <li>Tailwind</li>
          </ul>
        </div>

        <div style={{ flex: 1, marginLeft: "1rem" }}>
          <h3>+ Linguagens</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>UI/UX Design</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
