import React, { useState } from "react";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <h1>Emmanuel Lima</h1>
        <p>Desenvolvedor</p>
      </div>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#experience">EXPERIÊNCIA</a>
          </li>
          <li>
            <a href="#technologies">TECNOLOGIAS</a>
          </li>
          <li>
            <a href="#projects">PROJETOS</a>
          </li>
          <li>
            <a href="#contact">CONTATO</a>
          </li>
        </ul>
      </nav>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir Menu"
      >
        ☰
      </button>
    </header>
  );
}

export default Header;
