'use client';

import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  FaCode,
  FaDatabase,
  FaChartLine,
  FaCloud,
  FaNetworkWired,
  FaBrain,
  FaEthereum,
  FaGraduationCap,
} from 'react-icons/fa';
import { SiPython, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql, SiMysql } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    skills: ['Python', 'JavaScript (ES6+)', 'C/C++', 'Java', 'Solidity'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Web Development',
    icon: FaCode,
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'HTML5', 'CSS3/Tailwind'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Data Analysis & BI',
    icon: FaChartLine,
    skills: ['Power BI', 'Pandas', 'NumPy', 'SQL', 'Excel'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Machine Learning',
    icon: FaBrain,
    skills: ['Scikit-learn', 'TensorFlow', 'Algorithm Design'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Cloud & Networking',
    icon: FaCloud,
    skills: ['AWS', 'Computer Networks', 'Distributed Systems'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Database Systems',
    icon: FaDatabase,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Blockchain',
    icon: FaEthereum,
    skills: ['Smart Contracts', 'Hardhat', 'Ethers.js'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Teaching Areas',
    icon: FaGraduationCap,
    skills: ['Programming Fundamentals', 'Data Structures', 'OOP'],
    color: 'from-pink-500 to-rose-500',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.98', 'end 0.02'],
  });

  // Content stays fully visible almost the entire time, only subtle fade at very edges
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [30, 0, 0, -30]);

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      style={{ 
        opacity: inView ? 1 : opacity,
        y: inView ? 0 : y 
      }}
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-gray-900/30"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
            About Me
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Results-driven Computer Science graduate with expertise in software development,
            data analysis, and emerging technologies. Combines technical skills with teaching
            experience to deliver comprehensive technology education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative glass rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700/50 hover:border-indigo-200 dark:hover:border-indigo-700"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`inline-flex p-3.5 rounded-xl bg-gradient-to-br ${category.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white drop-shadow-lg" size={26} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-center"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-2 flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Professional Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 glass bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl p-8 md:p-12 border border-indigo-100/50 dark:border-indigo-800/30 shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Professional Profile
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
            <div>
              <p className="mb-4">
                Proficient in full-stack development, business intelligence tools, and machine
                learning applications with strong academic foundation in computer networks and
                distributed systems.
              </p>
              <p>
                Passionate about leveraging technology to solve real-world problems and
                committed to continuous learning and professional growth.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Experienced in teaching programming concepts and guiding students through
                web development projects using modern frameworks.
              </p>
              <p>
                Strong background in blockchain technology, smart contract development, and
                decentralized application architecture.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

