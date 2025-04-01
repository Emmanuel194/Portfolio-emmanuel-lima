import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

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
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "800px",
          margin: "0 auto",
          gap: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flex: "1",
            maxWidth: "250px",
          }}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{
              width: "30px",
              height: "30px",
              marginRight: "1rem",
              color: "rgba(77, 184, 255, 1)",
            }}
          />
          <div>
            <p
              style={{
                color: "rgba(242, 245, 248, 1)",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                margin: "0",
              }}
            >
              EMAIL
            </p>
            <p
              style={{
                color: "rgba(242, 245, 248, 0.8)",
                margin: "0",
              }}
            >
              emanuel_lima2011@hotmail.com
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flex: "1",
            maxWidth: "250px",
          }}
        >
          <FontAwesomeIcon
            icon={faPhone}
            style={{
              width: "30px",
              height: "30px",
              marginRight: "1rem",
              color: "rgba(77, 184, 255, 1)",
            }}
          />
          <div>
            <p
              style={{
                color: "rgba(242, 245, 248, 1)",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                margin: "0",
              }}
            >
              CONTATO
            </p>
            <p
              style={{
                color: "rgba(242, 245, 248, 0.8)",
                margin: "0",
              }}
            >
              (81) 97340-8668
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flex: "1",
            maxWidth: "250px",
            flexDirection: "column",
          }}
        >
          <div>
            <p
              style={{
                color: "rgba(242, 245, 248, 1)",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              SOCIAL
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                justifyContent: "center",
              }}
            >
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
      </div>
    </div>
  );
}

export default Contact;
