import React, { useState, useEffect } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import styled from 'styled-components'

import { useTheme } from '../../theme'

const ParticleWrapper = styled.div`
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;

  div {
    height: 100%;
  }

  @media (max-width: 450px) {
    height: 675px;
  }
`

const ParticlesContainer = () => {
  const { isDarkMode } = useTheme()
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
              position: 'relative',
            },
            particles: {
              number: {
                value: 120,
                density: {
                  enable: true,
                },
              },
              color: {
                value: '#000',
              },
              shape: {
                type: 'circle',
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 0.5,
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
                color: '#000',
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
            responsive: [
              {
                maxWidth: 600,
                options: {
                  particles: {
                    color: {
                      value: '#0000ff',
                    },
                    number: {
                      value: 40,
                    },
                  },
                },
              },
              {
                maxWidth: 1000,
                options: {
                  particles: {
                    color: {
                      value: '#00ff00',
                    },
                    number: {
                      value: 60,
                    },
                  },
                },
              },
            ],
          }}
        />
      )}
    </ParticleWrapper>
  )
}

export default ParticlesContainer
