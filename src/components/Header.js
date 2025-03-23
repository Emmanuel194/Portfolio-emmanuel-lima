import React from "react";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>Emmanuel Lima</h1>
        <p
          style={{
            margin: 0,
            fontSize: "0.9rem",
            color: "#aaa",
            fontWeight: "lighter",
          }}
        >
          Desenvolvedor
        </p>
      </div>

      <nav style={{ flexGrow: 1, textAlign: "right" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "flex-end",
            listStyle: "none",
            gap: "1rem",
            margin: 0,
            padding: 0,
            flexWrap: "wrap",
          }}
        >
          <li>
            <a href="#home" style={{ color: "#fff", textDecoration: "none" }}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" style={{ color: "#fff", textDecoration: "none" }}>
              SOBRE
            </a>
          </li>
          <li>
            <a
              href="#experience"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              EXPERIÊNCIA
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              TECNOLOGIAS
            </a>
          </li>
          <li>
            <a
              href="#projects"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              PROJETOS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              CONTATO
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
