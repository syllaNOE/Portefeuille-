import React, { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import type { Engine, Container } from 'tsparticles-engine';
import { useStore } from '../../store/useStore';

const ParticlesBackground: React.FC = () => {
  const { theme } = useStore();
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional: You can do something with the container here
  }, []);
  
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
          zIndex: -1
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: theme === 'dark' ? '#8B5CF6' : '#3B82F6'
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: theme === 'dark' ? '#8B5CF6' : '#3B82F6'
            }
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: theme === 'dark' ? '#8B5CF6' : '#3B82F6',
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: ["grab", "bubble"]
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.8
              }
            },
            bubble: {
              distance: 200,
              size: 6,
              duration: 0.3,
              opacity: 0.8,
              speed: 3
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        background: {
          color: {
            value: "transparent"
          },
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
      }}
    />
  );
};

export default ParticlesBackground;