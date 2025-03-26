import React from "react";

function Footer() {
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
          <h3 style={{ margin: "0.2rem 0", color: "#fff" }}>Emmanuel Lima</h3>{" "}
          <p
            style={{
              margin: "0.2rem 0",
              fontSize: "1rem",
              fontWeight: "lighter",
            }}
          >
            Desenvolvedor Front-End
          </p>
          <p style={{ margin: "0.2rem 0", fontSize: "0.9rem" }}>
            Criando experiências digitais únicas e memoráveis através do
            desenvolvimento web moderno.
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
          </h4>{" "}
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
              <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={{ color: "#fff", textDecoration: "none" }}
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
          <h4 style={{ color: "#fff", marginBottom: "0.5rem" }}>Social</h4>{" "}
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
                href="https://linkedin.com"
                target="_blank"
                style={{ color: "#fff", textDecoration: "none" }}
                rel="noreferrer"
              >
                LinkedIn
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
            href="/privacy-policy"
            style={{ color: "#aaa", textDecoration: "none" }}
          >
            Política de Privacidade
          </a>
          <span style={{ color: "#aaa" }}>•</span>
          <a
            href="/terms-of-use"
            style={{ color: "#aaa", textDecoration: "none" }}
          >
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
