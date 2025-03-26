import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faAws } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function Experience() {
  const [showMore, setShowMore] = useState(false);

  const experiences = [
    {
      company: "Freelancer",
      position: "Desenvolvedor Front-End",
      description:
        "Desenvolvimento de sites modernos e responsivos, criando soluções personalizadas para diversos nichos. Aplicação de boas práticas de usabilidade e design.",
      technologies: [faReact, faNodeJs, faDatabase],
    },
    {
      company: "Compass UOL",
      description:
        "Estágio em Engenharia de Dados na Compass UOL, atuando com AWS e pipelines de dados.",
      technologies: [faAws, faNodeJs],
    },
    {
      company: "Pagou.ai",
      description:
        "Desenvolvimento de integrações de APIs, interfaces dinâmicas e implementação de métodos de pagamento com QR Code.",
      technologies: [faReact, faNodeJs, faDatabase],
    },
    {
      company: "VibeCem",
      description:
        "Refatoração de interfaces com Angular e integração do WhatsApp ao sistema. Implementação de soluções no back-end e configuração de containers Docker.",
      technologies: [faReact, faDatabase, faNodeJs],
    },
  ];

  const visibleExperiences = showMore ? experiences : experiences.slice(0, 3);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2rem",
      }}
    >
      <div style={{ flex: 1, marginRight: "1rem" }}>
        <h2 style={{ color: "rgba(77, 184, 255, 1)", fontWeight: "bold" }}>
          Competências
        </h2>
        <h3>+ Formação</h3>

        <div
          style={{
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <div
            className="formation-card"
            style={{
              marginBottom: "1rem",
              padding: "0.5rem",
              borderRadius: "8px",
              backgroundColor: "rgba(51, 51, 51, 0.8)",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s ease, border-color 0.2s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ color: "rgb(242, 245, 248)", fontWeight: "bold" }}>
                Engenharia de Software
              </p>
              <p style={{ color: "rgba(77, 184, 255, 1)", fontWeight: "bold" }}>
                Em andamento
              </p>
            </div>
            <p style={{ color: "rgba(77, 184, 255, 1)", fontWeight: "bold" }}>
              Unifavip - Wyden
            </p>
            <p>
              Desenvolvendo habilidades em desenvolvimento de software,
              arquitetura de sistemas e banco de dados.
            </p>
          </div>

          <div
            className="formation-card"
            style={{
              marginBottom: "1rem",
              padding: "0.5rem",
              borderRadius: "8px",
              backgroundColor: "rgba(51, 51, 51, 0.8)",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s ease, border-color 0.2s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ color: "rgb(242, 245, 248)", fontWeight: "bold" }}>
                Análise e Desenvolvimento de Sistemas
              </p>
              <p style={{ color: "rgba(77, 184, 255, 1)", fontWeight: "bold" }}>
                Concluído
              </p>
            </div>
            <p style={{ color: "rgba(77, 184, 255, 1)", fontWeight: "bold" }}>
              Unifavip - Wyden
            </p>
            <p>
              Programa com foco em Java, Spring Boot, bancos de dados e boas
              práticas de programação.
            </p>
          </div>

          <div
            className="formation-card"
            style={{
              marginBottom: "1rem",
              padding: "0.5rem",
              borderRadius: "8px",
              backgroundColor: "rgba(51, 51, 51, 0.8)",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s ease, border-color 0.2s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ color: "rgb(242, 245, 248)", fontWeight: "bold" }}>
                Formação Acelerada em Programação - FAP
              </p>
              <p style={{ color: "rgba(77, 184, 255, 1)", fontWeight: "bold" }}>
                Concluído
              </p>
            </div>
            <p style={{ color: "rgba(77, 184, 255, 1)", fontWeight: "bold" }}>
              Softex Pernambuco
            </p>
            <p>
              Desenvolvimento de sistemas com foco em estrutura e experiência do
              usuário.
            </p>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, marginLeft: "1rem" }}>
        <h2 style={{ color: "rgba(77, 184, 255, 1)", fontWeight: "bold" }}>
          + Experiências
        </h2>

        {visibleExperiences.map((exp, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              borderLeft: "4px solid rgba(77, 184, 255, 1)",
              padding: "1rem",
              marginBottom: "1rem",
              backgroundColor: "rgba(51, 51, 51, 0.8)",
              borderRadius: "8px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div style={{ flex: 1 }}>
              <h4 style={{ color: "rgb(242, 245, 248)", fontWeight: "bold" }}>
                {exp.company}
              </h4>
              <p style={{ color: "rgba(242, 245, 248, 0.8)" }}>
                Cargo: {exp.position}
              </p>

              <p style={{ color: "rgba(242, 245, 248, 0.8)" }}>
                {exp.description}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                {exp.technologies.map((icon, idx) => (
                  <FontAwesomeIcon
                    key={idx}
                    icon={icon}
                    size="2x"
                    style={{ color: "rgba(77, 184, 255, 1)" }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => setShowMore(!showMore)}
          style={{
            display: "block",
            margin: "1rem auto",
            padding: "0.5rem 1rem",
            backgroundColor: "rgba(77, 184, 255, 1)",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {showMore ? "Mostrar menos" : "Mostrar mais"} +
        </button>
      </div>
    </div>
  );
}

export default Experience;
