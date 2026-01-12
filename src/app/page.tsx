'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 text-gray-900 dark:text-gray-100 relative overflow-x-hidden">
        <ParticleBackground />
        <Navigation />
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}


