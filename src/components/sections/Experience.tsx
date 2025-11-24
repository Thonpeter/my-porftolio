'use client';

import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaDatabase, FaChalkboardTeacher } from 'react-icons/fa';

const experiences = [
  {
    title: 'Computer Science Tutor',
    company: 'Amonto Girls Academy Secondary School',
    location: 'Juba, South Sudan',
    period: '2024 - Present',
    icon: FaChalkboardTeacher,
    color: 'from-indigo-500 to-purple-500',
    responsibilities: [
      'Teach programming concepts using C, C++, and JavaScript',
      'Introduce students to data analysis and visualization using Power BI',
      'Guide students through web development projects using modern frameworks',
    ],
  },
  {
    title: 'Data Entry Intern',
    company: 'Office of the Prime Minister (Uganda)',
    location: 'Refugee Registration Desk',
    period: 'Jul 2023 - Sep 2023',
    icon: FaDatabase,
    color: 'from-green-500 to-emerald-500',
    responsibilities: [
      'Managed and maintained refugee registration database systems',
      'Processed and verified data for 500+ refugee records',
      'Assisted in generating reports for government agencies',
    ],
  },
];

export default function Experience() {
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
      id="experience"
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
            Professional Experience
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey in technology and education
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-xl border-2 border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white drop-shadow-lg" size={24} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="glass rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50 hover:border-indigo-200 dark:hover:border-indigo-700">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            {exp.location}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1 flex-shrink-0">▸</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

