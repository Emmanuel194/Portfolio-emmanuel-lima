import React from "react";
import projeto1 from "../assets/images/projeto1.jpeg";
import projeto2 from "../assets/images/projeto2.PNG";
import projeto3 from "../assets/images/projeto3.jpg";
import projeto4 from "../assets/images/projeto4.PNG";
import projeto5 from "../assets/images/projeto5.PNG";

function Projects() {
  const projects = [
    {
      title: "Grupo Bellitate",
      description:
        "Desenvolvimento do sistema de cashback para o grupo Bellitate, criando uma solução funcional e eficiente para calcular e distribuir valores de cashback com base no total das compras dos usuários. Integração do sistema com outros estabelecimentos do mesmo grupo, permitindo o uso do cashback gerado em diferentes locais. Implementação do back-end utilizando TypeScript, Node.js e Express, assegurando escalabilidade e desempenho. Gerenciamento dos dados com MySQL, estruturando o banco de forma otimizada para suportar operações seguras e rápidas.",
      image: projeto1,
      link: "/",
    },
    {
      title: "Mercado Check",
      description:
        "Desenvolvimento do sistema Mercado Check, criado para facilitar a listagem de produtos e organizar compras de mercado com funcionalidades integradas e eficientes. O sistema inclui localização de mercados próximos utilizando a API Places do Google, além de exibir preços e variações de inflação de produtos alimentícios. Implementação do front-end com React.js para uma interface moderna e dinâmica e desenvolvimento do back-end com Node.js, Express e MongoDB, garantindo desempenho, flexibilidade e armazenamento otimizado.",
      image: projeto2,
      link: "https://github.com/Emmanuel194/MercadoCheckFront",
    },
    {
      title: "Ecommerce Simples",
      description:
        "e-commerce simples, focado em eficiência e funcionalidade, integrando tecnologias modernas para gestão de produtos e geração de pagamentos. O projeto foi implementado com um back-end em Python utilizando Flask, garantindo flexibilidade e escalabilidade. O sistema permite a gestão de produtos de forma intuitiva e gera QR Codes PIX sem vínculo a bancos, otimizando o processo de pagamento. O front-end foi desenvolvido em React.js, proporcionando uma interface responsiva e adaptável",
      image: projeto3,
      link: "https://github.com/Emmanuel194/-simple-ecommerce",
    },
    {
      title: "Seu Aluguel",
      description:
        "O Sistema Seu Aluguel, criado para simplificar o gerenciamento de aluguéis para usuários individuais. O projeto oferece funcionalidades como cadastro de contratos e inquilinos, além da gestão de mensalidades em datas determinadas pelo proprietário, permitindo a realização de cobranças mensais automatizadas para os inquilinos. A interface foi desenvolvida em React.js, proporcionando uma experiência moderna e responsiva, enquanto o back-end foi implementado com TypeScript, Node.js, e Express.js, garantindo escalabilidade e segurança. O sistema utiliza MongoDB como banco de dados, oferecendo alta performance e flexibilidade no armazenamento das informações.",
      image: projeto4,
      link: "https://github.com/Emmanuel194/Seualuguelfront",
    },
    {
      title: "Eu acho que ganhei",
      description:
        "Eu Acho Que Ganhei,é uma plataforma voltada para auxiliar apostadores de loterias a tomar decisões mais estratégicas ao realizar seus jogos. O sistema conta com um banco de dados robusto que armazena os dados históricos de todos os jogos realizados, permitindo a análise e comparação de padrões anteriores. Com base nesses dados, o sistema calcula probabilidades de números que podem se repetir nos próximos sorteios, além de identificar possíveis combinações com maior favorecimento para repetição. Embora não seja totalmente assertivo, o projeto oferece insights valiosos para otimizar as escolhas dos jogadores.",
      image: projeto5,
      link: "https://github.com/Emmanuel194/achoqueganhei-front",
    },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h2
        style={{
          color: "rgba(77, 184, 255, 1)",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        PROJETOS
      </h2>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              width: "300px",
              textAlign: "left",
              padding: "1rem",
              marginBottom: "2rem",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              border: "0px 2px 5px rgba(0, 0, 0, 0.2)",
              borderRadius: "8px",
              backgroundColor: "rgba(51, 51, 51, 0.8)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "8px",
                objectFit: "cover",
                marginBottom: "1rem",
              }}
            />
            <h3
              style={{
                color: "rgb(242, 245, 248)",
                fontWeight: "bold",
                textAlign: "left",
                marginBottom: "0.5rem",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                color: "#aaa",
                textAlign: "left",
                fontSize: "14px",
                lineHeight: "1.5",
                flexGrow: 1,
              }}
            >
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              style={{
                textDecoration: "none",
                marginTop: "1rem",
                alignSelf: "flex-start",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  padding: "5px",
                  marginRight: "0.5rem",
                }}
              />
              <span
                style={{
                  fontSize: "14px",
                  color: "rgba(77, 184, 255, 1)",
                  fontWeight: "bold",
                }}
              >
                Ver no GitHub
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
