'use client';

import { useCallback, useMemo, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '@/contexts/ThemeContext';

export default function ParticleBackground() {
  const { theme } = useTheme();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
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
          mode: 'push' as const,
        },
        onHover: {
          enable: true,
          mode: 'repulse' as const,
        },
        resize: {
          enable: true,
        },
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
        enable: true,
        outModes: 'bounce' as const,
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

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0 pointer-events-none"
      options={options}
      key={theme} // Force re-render when theme changes
    />
  );
}

