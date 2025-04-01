import React, { useState } from "react";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1>Emmanuel Lima</h1>
        <p>Desenvolvedor</p>
      </div>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={() => handleMenuClick("#home")}>
              HOME
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => handleMenuClick("#experience")}
            >
              EXPERIÊNCIA
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              onClick={() => handleMenuClick("#technologies")}
            >
              TECNOLOGIAS
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => handleMenuClick("#projects")}>
              PROJETOS
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handleMenuClick("#contact")}>
              CONTATO
            </a>
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
