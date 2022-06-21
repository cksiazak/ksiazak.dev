import React from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

import { isMobile } from "react-device-detect"

const HeadingParticles = ({ darkMode }) => {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      init={particlesInit}
      params={{
        style: {
          position: "relative",
        },
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: !darkMode
              ? "#4F5057"
              : ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 6,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 4.008755121184665,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 96.21012290843196,
            color: !darkMode ? "#4F5057" : "#FFF",
            opacity: 0.40087551211846645,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: isMobile ? false : true,
              mode: "bubble",
            },
            onclick: {
              enable: isMobile ? false : true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 150,
              size: 6,
              duration: 2,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  )
}

export default HeadingParticles
