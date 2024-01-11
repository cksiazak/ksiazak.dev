'use client'

import React, { useState, useEffect } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import styled from 'styled-components'

const ParticleWrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;

  div {
    height: 100%;
    animation-duration: 0.5s;
    animation-name: fadeIn;
  }
`

const ParticlesContainer = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    <ParticleWrapper>
      {init && (
        <Particles
          id='particles'
          options={{
            style: {
              position: 'absolute',
              animation: 'fade-in 3s',
              zIndex: '0',
            },
            particles: {
              number: {
                value: 120,
                density: {
                  enable: true,
                },
              },
              color: {
                value: '#fff',
              },
              shape: {
                type: 'circle',
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 0.4,
                },
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false,
                },
              },
              size: {
                value: {
                  min: 1,
                  max: 7,
                },
                animation: {
                  enable: true,
                  speed: 20,
                  sync: false,
                },
              },
              links: {
                enable: true,
                distance: 150,
                color: '#fff',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'grab',
                },
                onClick: {
                  enable: true,
                  mode: 'push',
                },
              },
              modes: {
                grab: {
                  distance: 200,
                  links: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8,
                },
                repulse: {
                  distance: 200,
                },
                push: {
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
              },
            },
          }}
        />
      )}
    </ParticleWrapper>
  )
}

export default ParticlesContainer
