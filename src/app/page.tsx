'use client';

import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import NowSection from '@/components/sections/Now';
import About from '@/components/sections/About';
import StackSection from '@/components/sections/Stack';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-neutral-200 dark:selection:bg-neutral-800">
        <Navigation />
        <main className="divide-y divide-neutral-200 dark:divide-neutral-900">
          <Hero />
          <Projects />
          <Experience />
          <NowSection />
          <About />
          <StackSection />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
