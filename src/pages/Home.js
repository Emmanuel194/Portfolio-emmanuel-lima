import React from "react";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <img
        src="/path-to-your-photo.jpg"
        alt="Foto de Emmanuel Lima"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          marginBottom: "1rem",
        }}
      />
      <h2>SOBRE</h2>
      <h3>Quem eu sou?</h3>
      <p style={{ maxWidth: "600px", margin: "0 auto" }}>
        Sou um desenvolvedor Front-End apaixonado por criar interfaces modernas
        e funcionais, unindo criatividade e tecnologia para proporcionar
        experiências digitais únicas. Com uma trajetória inicial no design
        gráfico, utilizo meu olhar apurado para detalhes e usabilidade para
        transformar ideias em projetos visuais impactantes. Estou sempre
        buscando aprender e crescer com novos desafios.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/path-to-linkedin-icon.png"
            alt="LinkedIn"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/path-to-github-icon.png"
            alt="GitHub"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
