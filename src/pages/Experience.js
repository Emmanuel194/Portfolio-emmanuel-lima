import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faPython,
  faLaravel,
  faAngular,
  faAws,
  faDocker,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch, faCode } from "@fortawesome/free-solid-svg-icons";
import "../styles/experience.css";

function Experience() {
  const [showMore, setShowMore] = useState(false);

  const experiences = [
    {
      company: "Cesar School",
      position: "Tutor de Tecnologia",
      description:
        "Instrução e orientação de alunos do ensino médio no desenvolvimento de habilidades em linguagens de programação, incluindo Python, JavaScript, HTML e CSS.  Aplicação de abordagens pedagógicas inovadoras, como peer instruction, para promover colaboração entre os alunos. Condução de projetos práticos de curta duração que consolidam o aprendizado por meio de aplicações reais.",
      technologies: [faHtml5, faCss3Alt, faJsSquare, faPython],
    },
    {
      company: "Pagou.ai",
      position: "Desenvolvedor Full-Stack",
      description:
        "Desenvolvimento de integrações de APIs voltadas para o setor de jogos, assegurando alta funcionalidade e escalabilidade. Implementação de métodos de pagamento com QR Code para empresas parceiras utilizando Laravel. Criação e implementação de interfaces dinâmicas e intuitivas com React no front-end, enquanto no back-end, desenvolvimento e otimização de métodos em JavaScript para aprimorar a eficiência do sistema. Realização de testes detalhados na plataforma, aplicando boas práticas de controle de qualidade para garantir desempenho e confiabilidade.",
      technologies: [
        faReact,
        faJsSquare,
        faNodeJs,
        faLaravel,
        faDatabase,
        faCodeBranch,
      ],
    },
    {
      company: "VibeCem",
      position: "Desenvolvedor Full-Stack",
      description:
        "Desenvolvimento e refatoração de interfaces utilizando Angular, com foco na melhoria da experiência do usuário. Integração do WhatsApp ao sistema web, otimizando os canais de comunicação e atendimento. Implementação de soluções no back-end com Node.js, atendendo a requisitos avançados de arquitetura e fluxo de dados. Execução de migrações no banco de dados PostgreSQL, utilizando seeders para enriquecimento de dados e automação de processos. Configuração e gerenciamento de containers Docker para aprimorar os processos de implantação e manutenção do sistema..",
      technologies: [
        faReact,
        faNodeJs,
        faDatabase,
        faAngular,
        faDocker,
        faAws,
        faCode,
      ],
    },
    {
      company: "Oculare Medical Center",
      position: "Técnico De Informática",
      description:
        "Responsável por realizar manutenção preventiva e corretiva de equipamentos, abrangendo suporte técnico local e remoto. Desenvolvimento e automação de chatbots para WhatsApp utilizando a plataforma Blip-Take, integrando-os às operações da empresa para otimizar canais de atendimento. Atuação como líder técnico no setor de tecnologia durante o processo de acreditação pela ONA, contribuindo diretamente para a obtenção do selo de qualidade. Acúmulo de ampla experiência na implementação e gerenciamento de sistemas, consolidando soluções eficazes para as demandas operacionais.",
      technologies: [faWindows, faDatabase, faNodeJs, faAws],
    },
  ];

  const visibleExperiences = showMore ? experiences : experiences.slice(0, 2);

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
            <p style={{ color: "#aaa" }}>
              Aprimorando habilidades no desenvolvimento de software,
              arquitetura de sistemas e gerenciamento de bancos de dados. Foco
              em projetar soluções eficientes, escaláveis e alinhadas às boas
              práticas de engenharia.
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
            <p style={{ color: "#aaa" }}>
              Formação com foco em desenvolvimento de software, utilizando
              tecnologias como Java e Spring Boot para a criação de sistemas
              robustos e escaláveis. Ênfase em modelagem e gerenciamento de
              bancos de dados.
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
            <p style={{ color: "#aaa" }}>
              Participação na trilha Back-End como parte do projeto de
              Residência de Software realizado pelo convênio Softex/MCTI.
              Durante o programa de 200 horas, foram abordados conceitos e
              práticas de desenvolvimento web e mobile com foco em JavaScript.
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
