'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaVoteYea, FaSearch, FaSchool, FaCode, FaDatabase, FaUsers, FaGraduationCap } from 'react-icons/fa';
import { SiSolidity, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb } from 'react-icons/si';

interface Project {
  id: number;
  name: string;
  title: string;
  description: string;
  longDescription: string;
  github: string;
  demo: string;
  technologies: string[];
  icon: React.ComponentType<{ className?: string; size?: number }>;
  gradient: string;
  features: string[];
  repoName: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'blockchain-voting',
    title: 'Decentralized Voting System',
    description: 'A secure blockchain-based voting platform ensuring transparency and immutability in electoral processes.',
    longDescription: 'Developed a comprehensive decentralized voting application using blockchain technology. Implemented smart contracts for secure vote recording and tallying, ensuring transparency, immutability, and eliminating electoral fraud. Features include voter authentication, real-time vote tracking, and tamper-proof results.',
    github: 'https://github.com/Thonpeter/Blockchain-Voting-System',
    demo: 'https://github.com/Thonpeter/Blockchain-Voting-System',
    technologies: ['Solidity', 'React', 'Node.js', 'Web3', 'Ethers.js'],
    icon: FaVoteYea,
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    features: ['Smart Contracts', 'Voter Authentication', 'Real-time Tracking', 'Tamper-proof Results'],
    repoName: 'Blockchain-Voting-System',
  },
  {
    id: 2,
    name: 'lost-found',
    title: 'Lost & Found Platform for South Sudan',
    description: 'A community-driven platform connecting lost items with their owners across South Sudan.',
    longDescription: 'Built a comprehensive lost and found system specifically designed for South Sudan communities. Enables users to report lost items, search for found items, and connect with community members. Features include image uploads, location-based search, category filtering, and secure messaging between users.',
    github: 'https://github.com/Thonpeter/lost-and-found-south-sudan',
    demo: 'https://lostnfound-10hbg7kzf-thons-projects-d3ecb359.vercel.app/',
    technologies: ['Next.js', 'React', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    icon: FaSearch,
    gradient: 'from-green-500 via-emerald-500 to-teal-600',
    features: ['Image Upload', 'Location Search', 'Category Filtering', 'Secure Messaging'],
    repoName: 'lost-and-found-south-sudan',
  },
  {
    id: 3,
    name: 'amonto',
    title: 'Amonto Girls Academy Website',
    description: 'Official website for Amonto Girls Academy, showcasing the school\'s mission, programs, and achievements.',
    longDescription: 'Developed a modern, responsive website for Amonto Girls Academy Secondary School. Features include program information, student resources, news updates, and contact information. Built with a focus on accessibility, performance, and user experience to effectively represent the school\'s mission and values.',
    github: 'https://github.com/Thonpeter/amonto',
    demo: 'https://www.amontogirls.com',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: FaSchool,
    gradient: 'from-purple-500 via-pink-500 to-rose-600',
    features: ['Program Information', 'Student Resources', 'News Updates', 'Contact Forms'],
    repoName: 'amonto',
  },
  {
    id: 4,
    name: 'nec-hub',
    title: 'South Sudan National Exams Hub',
    description: 'A modern, elegant web platform for hosting South Sudan National Exams resources including subject notes, past papers, and study materials.',
    longDescription: 'A modern, elegant web platform for hosting South Sudan National Exams resources including subject notes, past papers, and study materials. Built with beautiful UI components, smooth animations, and a focus on user experience. Features include resource browsing, downloads, bookmarks, student dashboard, and admin tools.',
    github: 'https://github.com/Thonpeter/nec',
    demo: 'https://github.com/Thonpeter/nec',
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'MongoDB'],
    icon: FaGraduationCap,
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    features: ['Resource Repository', 'Student Dashboard', 'Admin Management', 'Dark Mode Support'],
    repoName: 'nec',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
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
            Featured Projects
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions that make a real impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative h-full glass rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700/50 hover:border-indigo-300 dark:hover:border-indigo-600">
                  {/* Animated Gradient Header */}
                  <div className={`relative h-56 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center overflow-hidden`}>
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Large Icon */}
                    <div className="relative z-10">
                      <div className="w-28 h-28 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl border border-white/30">
                        <Icon className="text-white drop-shadow-lg" size={56} />
                      </div>
                    </div>

                    {/* Floating Code Elements */}
                    <div className="absolute top-4 left-4 text-white/40 font-mono text-xs font-semibold">
                      {'<project>'}
                    </div>
                    <div className="absolute bottom-4 right-4 text-white/40 font-mono text-xs font-semibold">
                      {'</project>'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-5 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-600 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-500" size={12} />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2.5 mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-5 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2.5 px-5 py-3 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md font-semibold text-sm group"
                      >
                        <FaGithub size={18} className="group-hover:scale-110 transition-transform" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2.5 px-5 py-3 bg-gradient-to-r ${project.gradient} hover:shadow-xl text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl font-semibold text-sm group`}
                      >
                        <FaExternalLinkAlt size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        <span>View Live</span>
                      </a>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
