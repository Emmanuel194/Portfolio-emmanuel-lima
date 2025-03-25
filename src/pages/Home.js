import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faJsSquare,
  faPython,
  faGitAlt,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import perfil from "../assets/images/perfil.jpg";

function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#333",
        color: "#fff",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        <img
          src={perfil}
          alt="Foto de Emmanuel Lima"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            border: "3px solid #fff",
          }}
        />

        <div style={{ textAlign: "left" }}>
          <h2 style={{ marginBottom: "0.5rem" }}>Olá, eu sou</h2>
          <h3
            style={{
              fontSize: "40px",
              margin: "0 0 1rem 0",
              color: "#4DB8FF",
            }}
          >
            Emmanuel Lima :)
          </h3>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "1rem",
            }}
          >
            Desenvolvedor Front-End.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <FontAwesomeIcon
              icon={faCss3Alt}
              size="2x"
              style={{ color: "#2965f1" }}
            />
            <FontAwesomeIcon
              icon={faJsSquare}
              size="2x"
              style={{ color: "#f7df1e" }}
            />
            <FontAwesomeIcon
              icon={faPython}
              size="2x"
              style={{ color: "#3776ab" }}
            />
          </div>
        </div>
      </div>

      <div style={{ textAlign: "left", marginLeft: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>SOBRE</h2>
        <p
          style={{
            maxWidth: "600px",
            marginBottom: "2rem",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          Sou um desenvolvedor Front-End apaixonado por criar interfaces
          modernas e funcionais, unindo criatividade e tecnologia para
          proporcionar experiências digitais únicas. Com uma trajetória inicial
          no design gráfico, utilizo meu olhar apurado para detalhes e
          usabilidade para transformar ideias em projetos visuais impactantes.
          Estou sempre buscando aprender e crescer com novos desafios.
        </p>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              borderBottom: "1px solid #4DB8FF",
            }}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ color: "#0077b5" }}
            />{" "}
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              borderBottom: "1px solid #4DB8FF",
            }}
          >
            <FontAwesomeIcon
              icon={faGitAlt}
              size="2x"
              style={{ color: "#f34f29" }}
            />{" "}
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
