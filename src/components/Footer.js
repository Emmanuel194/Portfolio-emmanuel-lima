import React from "react";

function Footer() {
  const linkHoverColor = "rgba(77, 184, 255, 1)";

  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#aaa",
        padding: "2rem",
        marginTop: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: "0.2rem 0", color: "#fff" }}>Emmanuel Lima</h3>
          <p
            style={{
              margin: "0.2rem 0",
              fontSize: "1rem",
              fontWeight: "lighter",
            }}
          >
            Desenvolvedor Full-stack.
          </p>
          <p style={{ margin: "0.2rem 0", fontSize: "0.9rem" }}>
            Desenvolvedor Full Stack Criando soluções web e sistemas escaláveis
            com foco em performance e usabilidade.
          </p>
        </div>

        <div
          style={{
            flex: 1,
            textAlign: "center",
            margin: "0",
          }}
        >
          <h4
            style={{
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              color: "#fff",
            }}
          >
            Links Rápidos
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.3rem",
            }}
          >
            <li>
              <a
                href="#home"
                style={{ color: "#aaa", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target.style.color = linkHoverColor)}
                onMouseLeave={(e) => (e.target.style.color = "#aaa")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#experience"
                style={{ color: "#aaa", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target.style.color = linkHoverColor)}
                onMouseLeave={(e) => (e.target.style.color = "#aaa")}
              >
                Experiências
              </a>
            </li>
            <li>
              <a
                href="#projects"
                style={{ color: "#aaa", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target.style.color = linkHoverColor)}
                onMouseLeave={(e) => (e.target.style.color = "#aaa")}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                style={{ color: "#aaa", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target.style.color = linkHoverColor)}
                onMouseLeave={(e) => (e.target.style.color = "#aaa")}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div
          style={{
            flex: 1,
            textAlign: "right",
            margin: "0",
          }}
        >
          <h4 style={{ color: "#fff", marginBottom: "0.5rem" }}>Social</h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.3rem",
            }}
          >
            <li>
              <a
                href="https://www.linkedin.com/in/emmanuellimaa/"
                target="_blank"
                style={{ color: "#aaa", textDecoration: "none" }}
                rel="noreferrer"
                onMouseEnter={(e) => (e.target.style.color = linkHoverColor)}
                onMouseLeave={(e) => (e.target.style.color = "#aaa")}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Emmanuel194"
                target="_blank"
                style={{ color: "#aaa", textDecoration: "none" }}
                rel="noreferrer"
                onMouseEnter={(e) => (e.target.style.color = linkHoverColor)}
                onMouseLeave={(e) => (e.target.style.color = "#aaa")}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr style={{ border: "0.5px solid #444", margin: "1rem 0" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.9rem" }}>
          © 2025 Emmanuel Lima. Todos os direitos reservados.
        </p>

        <div style={{ display: "flex", gap: "1rem" }}>
          <a
            href="/"
            style={{ color: "#aaa", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.color = linkHoverColor)}
            onMouseLeave={(e) => (e.target.style.color = "#aaa")}
          >
            Política de Privacidade
          </a>
          <span style={{ color: "#aaa" }}>•</span>
          <a
            href="/"
            style={{ color: "#aaa", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.color = linkHoverColor)}
            onMouseLeave={(e) => (e.target.style.color = "#aaa")}
          >
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
