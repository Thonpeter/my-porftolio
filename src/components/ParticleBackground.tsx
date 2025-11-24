'use client';

import { useCallback, useMemo } from 'react';
import Particles from 'react-particles';
// @ts-ignore - tsparticles-slim doesn't have types
import { loadSlim } from 'tsparticles-slim';
import { useTheme } from '@/contexts/ThemeContext';

export default function ParticleBackground() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particleColor = useMemo(() => {
    return theme === 'dark' ? '#818cf8' : '#4f46e5';
  }, [theme]);

  const options = useMemo(() => ({
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: particleColor,
      },
      links: {
        color: particleColor,
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        out_mode: 'bounce',
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.4,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: 3,
        random: {
          enable: true,
          minimumValue: 1,
        },
      },
    },
    detectRetina: true,
  }), [particleColor]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={options}
      key={theme} // Force re-render when theme changes
    />
  );
}

