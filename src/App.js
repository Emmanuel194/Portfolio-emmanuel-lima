import React from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <section id="home" style={{ padding: "2rem" }}>
          <Home />
        </section>
        <section id="experience" style={{ padding: "2rem" }}>
          <Experience />
        </section>
        <section id="technologies" style={{ padding: "2rem" }}>
          <Technologies />
        </section>
        <section id="projects" style={{ padding: "2rem" }}>
          <Projects />
        </section>
        <section id="contact" style={{ padding: "2rem" }}>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
