import React from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

function RainEffect() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 100 },
          color: { value: "#00aaff" },
          shape: { type: "line" },
          opacity: { value: 0.5 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 10,
            direction: "bottom",
            straight: true,
          },
        },
        background: {
          color: "#333",
        },
      }}
    />
  );
}

export default RainEffect;
