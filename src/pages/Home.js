import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faJsSquare,
  faPython,
  faGitAlt,
  faReact,
  faNodeJs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import perfil from "../assets/images/perfil.jpeg";

function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#333",
        color: "#fff",
        minHeight: "100vh",
        padding: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "4rem",
        }}
      >
        <img
          src={perfil}
          alt="Foto de Emmanuel Lima"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            border: "3px solid #4DB8FF",
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
            Desenvolvedor Full-Stack.
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
              title="CSS3"
            />
            <FontAwesomeIcon
              icon={faJsSquare}
              size="2x"
              style={{ color: "#f7df1e" }}
              title="JavaScript"
            />
            <FontAwesomeIcon
              icon={faPython}
              size="2x"
              style={{ color: "#3776ab" }}
              title="Python"
            />
            <FontAwesomeIcon
              icon={faReact}
              size="2x"
              style={{ color: "#61DBFB" }}
              title="React"
            />
            <FontAwesomeIcon
              icon={faDatabase}
              size="2x"
              style={{ color: "#00758f" }}
              title="SQL"
            />
            <FontAwesomeIcon
              icon={faNodeJs}
              size="2x"
              style={{ color: "#3C873A" }}
              title="Node.js"
            />
            <FontAwesomeIcon
              icon={faJsSquare}
              size="2x"
              style={{ color: "#3178C6" }}
              title="TypeScript"
            />
            <FontAwesomeIcon
              icon={faFigma}
              size="2x"
              style={{ color: "#F24E1E" }}
              title="Figma"
            />
            <FontAwesomeIcon
              icon={faGitAlt}
              size="2x"
              style={{ color: "#F1502F" }}
              title="Git"
            />
          </div>
        </div>
      </div>

      <div style={{ textAlign: "left", marginLeft: "2rem" }}>
        <h2 style={{ marginBottom: "1rem", color: "#4DB8FF" }}>SOBRE</h2>
        <h3 style={{ marginBottom: "1rem", color: "#aaa" }}>Quem eu sou?</h3>
        <p
          style={{
            maxWidth: "600px",
            marginBottom: "2rem",
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#aaa",
          }}
        >
          Sou um Desenvolvedor Full Stack com 2 anos de experiência na criação
          de sistemas escaláveis e aplicações web modernas. Minha especialidade
          inclui trabalhar com tecnologias como Node.js, React e TypeScript.
          Tenho vasta experiência em integrações de APIs, desenvolvimento de
          processos de checkout e gateways de pagamento, além de construir
          chatbots e soluções inovadoras. Estou sempre buscando aprender e
          crescer com novos desafios.
        </p>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a
            href="https://www.linkedin.com/in/emmanuellimaa/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{
              textDecoration: "none",
            }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#0077B5",
              }}
            />
          </a>
          <a
            href="https://github.com/Emmanuel194"
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
      </div>
    </div>
  );
}

export default Home;
