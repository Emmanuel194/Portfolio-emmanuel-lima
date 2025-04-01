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
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="left-column">
        <img src={perfil} alt="Foto de Emmanuel Lima" className="profile-img" />
        <div className="icons-container">
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

      <div className="right-column">
        <h2>SOBRE</h2>
        <h3>Quem eu sou?</h3>
        <p>
          Sou um Desenvolvedor Full Stack com 2 anos de experiência na criação
          de sistemas escaláveis e aplicações web modernas. Minha especialidade
          inclui trabalhar com tecnologias como Node.js, React e TypeScript.
          Tenho vasta experiência em integrações de APIs, desenvolvimento de
          processos de checkout e gateways de pagamento, além de construir
          chatbots e soluções inovadoras. Estou sempre buscando aprender e
          crescer com novos desafios.
        </p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/emmanuellimaa/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/Emmanuel194"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
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
