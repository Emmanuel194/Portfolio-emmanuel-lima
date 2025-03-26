import React from "react";
import Email from "../assets/icons/email.png";
import Chat from "../assets/icons/chat.png";
import Phone from "../assets/icons/phone.png";

function Contact() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2
        style={{
          color: "rgba(77, 184, 255, 1)",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        CONTATO
      </h2>
      <p
        style={{
          marginBottom: "2rem",
          color: "rgba(242, 245, 248, 0.8)",
          fontSize: "1.2rem",
          textAlign: "center",
        }}
      >
        Vamos trabalhar juntos?
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flex: "1",
          }}
        >
          <img
            src={Email}
            alt="Email"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "1rem",
            }}
          />
          <div>
            <p
              style={{
                color: "rgba(242, 245, 248, 1)",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              EMAIL:
            </p>
            <p style={{ color: "rgba(242, 245, 248, 0.8)" }}>
              aliciakathleenp@gmail.com
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flex: "1",
          }}
        >
          <img
            src={Phone}
            alt="Phone"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "1rem",
            }}
          />
          <div>
            <p
              style={{
                color: "rgba(242, 245, 248, 1)",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              CONTATO:
            </p>
            <p style={{ color: "rgba(242, 245, 248, 0.8)" }}>(31) 97305-1982</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flex: "1",
          }}
        >
          <img
            src={Chat}
            alt="Social"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "1rem",
            }}
          />
          <div>
            <p
              style={{
                color: "rgba(242, 245, 248, 1)",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              SOCIAL:
            </p>
            <p>
              <a
                href="https://linkedin.com/in/seu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "rgba(77, 184, 255, 1)",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "rgba(77, 184, 255, 1)",
                }}
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
