'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -50, -100]);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        'Computer Science Teacher',
        'Full Stack Developer',
        'Data Analyst',
        'Blockchain Developer',
      ],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Thonpeter', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/thon-peter', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:thonawangjr@gmail.com', label: 'Email' },
    { icon: FaPhone, href: 'tel:+211920592410', label: 'Phone' },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      style={{ opacity, y }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold shadow-lg">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                Welcome to My Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
            >
              <span className="text-gray-800 dark:text-gray-100">Hi, I&apos;m</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                Thon Peter Mawut
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl mb-8 min-h-[3rem]"
            >
              <span className="text-gray-700 dark:text-gray-300">I&apos;m a </span>
              <span
                ref={typedRef}
                className="text-indigo-600 dark:text-indigo-400 font-bold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Results-driven Computer Science graduate with expertise in software development,
              data analysis, and emerging technologies. Combining technical skills with teaching
              experience to deliver comprehensive technology education.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/Resume-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 rounded-xl font-semibold hover:bg-white dark:hover:bg-gray-800 hover:border-indigo-400 dark:hover:border-indigo-500 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <FaDownload /> Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group w-14 h-14 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20"
                >
                  <Icon size={22} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Animated gradient rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-3xl opacity-40 animate-pulse" />
              <div className="absolute inset-[-20px] bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full blur-2xl opacity-20" />
              
              {/* Profile image container - circular */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-2xl">
                <Image
                  src="/prof2.png"
                  alt="Thon Peter Mawut"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-xl opacity-30" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-indigo-500 rounded-full blur-xl opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
