'use client';

import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaAward, FaBook } from 'react-icons/fa';

const education = {
  degree: 'Bachelor of Science in Computer Science',
  university: 'University of Nairobi',
  period: '2019 - 2024',
  honors: 'Second Class Honors (Upper Division)',
  coursework: [
    'Machine Learning',
    'Cloud Computing',
    'Network Security',
    'Business Intelligence & Analytics',
    'Data Structures',
    'Computer Graphics',
  ],
  thesis: 'Decentralized Students eVoting System with Blockchain',
};

const certifications = [
  {
    title: 'Introduction to DHIS2',
    year: '2025',
    icon: FaAward,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Algorand Blockchain Developer',
    year: '2024',
    icon: FaAward,
    color: 'from-purple-500 to-pink-500',
  },
];

export default function Education() {
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
      id="education"
      style={{ 
        opacity: inView ? 1 : opacity,
        y: inView ? 0 : y 
      }}
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-800/30"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
            Education & Certifications
          </h2>
          <div className="section-divider mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700/50"
          >
            <div className="flex items-center mb-6">
              <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mr-4 shadow-lg">
                <FaGraduationCap className="text-white drop-shadow-lg" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {education.degree}
                </h3>
                <p className="text-lg text-indigo-600 dark:text-indigo-400">
                  {education.university}
                </p>
              </div>
            </div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold mb-4">
                {education.period} • {education.honors}
              </span>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                <strong className="text-gray-800 dark:text-white">Thesis:</strong>{' '}
                {education.thesis}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                <FaBook className="mr-2 text-indigo-600 dark:text-indigo-400" />
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {education.coursework.map((course) => (
                  <div
                    key={course}
                    className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shadow-sm"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700/50"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <FaAward className="mr-2 text-indigo-600 dark:text-indigo-400" />
              Certifications & Training
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500"
                  >
                    <div className={`p-3 bg-gradient-to-br ${cert.color} rounded-lg mr-4`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{cert.year}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

