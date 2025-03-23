import React from "react";

function Experience() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2rem",
      }}
    >
      <div style={{ flex: 1, marginRight: "1rem" }}>
        <h2>Competências</h2>
        <h3>+ Formação</h3>
        <p>
          <strong>Engenharia de Software</strong> - Em andamento
        </p>
        <p>
          UniCesumar: Cursando Engenharia de Software, desenvolvendo habilidades
          em desenvolvimento de software, arquitetura de sistemas e banco de
          dados.
        </p>
        <p>
          <strong>Trilha Backend</strong> - Em andamento
        </p>
        <p>
          Oracle Next Education: Programa com foco em Java, Spring Boot, bancos
          de dados e boas práticas de programação.
        </p>
      </div>

      <div style={{ flex: 1, marginLeft: "1rem" }}>
        <h3>+ Experiências</h3>
        <p>
          <strong>Freelancer</strong> - Desenvolvimento web
        </p>
        <p>
          Desenvolvimento de sites modernos e responsivos, criando soluções
          personalizadas para diversos nichos. Aplicação de boas práticas de
          usabilidade e design.
        </p>
        <p>
          <strong>Compass UOL</strong> - Engenharia de Dados em Nuvem
        </p>
        <p>
          Estágio em Engenharia de Dados na Compass UOL, atuando com AWS e
          pipelines de dados.
        </p>
      </div>
    </div>
  );
}

export default Experience;
