"use client";
import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaPalette, FaRocket, FaFacebook } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';
import ParticleBackground from './ParticleBackground';
import { Switch } from '@headlessui/react';

export default function Home() {
  const typedRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.2 });
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);

  const projectsData = [
    {
      title: 'Decentralized Finance App',
      description: 'A cutting-edge DeFi application built on Ethereum, enabling users to lend, borrow, and trade cryptocurrency assets securely.',
      image: '/project1.jpeg',
      link: '#',
    },
    {
      title: 'NFT Marketplace',
      description: 'A decentralized marketplace for creating, buying, and selling unique digital assets as Non-Fungible Tokens (NFTs) on the blockchain.',
      image: '/project2.jpeg',
      link: '#',
    },
    {
      title: 'Supply Chain Management',
      description: 'A blockchain-based solution for transparent and efficient supply chain management, ensuring product traceability and authenticity.',
      image: '/project3.jpg',
      link: '#',
    },
  ];

  const titleAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-50px)',
  });

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Blockchain Developer', 'Full Stack Developer', 'Creative Problem Solver'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        reset();
      } else {
        throw new Error('Error sending message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Error sending message');
    }
    setIsSubmitting(false);
  };

  const toggleTimeline = () => {
    setIsTimelineVisible((prevVisible) => !prevVisible);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-r from-gray-100 to-white dark:from-gray-900 dark:to-slate-900 min-h-screen text-gray-800 dark:text-white relative">
        <ParticleBackground />

        {/* Navigation Bar */}
        <nav className="container mx-auto py-6 px-4 flex justify-between items-center relative z-10">
          <div className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
            Thon Peter Mawut
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-8 font-semibold">
              <a
                href="#home"
                className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
            <Switch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className={`${
                isDarkMode ? 'bg-indigo-600' : 'bg-gray-200'
              } relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span className="sr-only">Toggle dark mode</span>
              <span
                className={`${
                  isDarkMode ? 'translate-x-6' : 'translate-x-1'
                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
              />
            </Switch>
          </div>
        </nav>

        {/* Home Section */}
        <section
          id="home"
          className="container mx-auto min-h-screen flex flex-col justify-center items-center text-center relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold mb-6 text-gray-800 dark:text-white"
          >
            Welcome to My Innovative World
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-8 text-gray-800 dark:text-white"
          >
            Hi, I&apos;m Thon Peter Mawut, a{' '}
            <span ref={typedRef} className="text-indigo-600 dark:text-indigo-400 font-bold"></span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-4"
          >
            <a
              href="#projects"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto py-20 px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/prof2.png"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
            <div>
              <animated.h2 style={titleAnimation} className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                About Me
              </animated.h2>
              <p className="text-xl mb-6 text-gray-800 dark:text-white">
                Iam a full stack developer with expertise in blockchain technology and smart contract development, creating innovative decentralized applications. Passionate about leveraging the power of blockchain to build secure, transparent, and efficient solutions.
              </p>
              <div className="flex flex-wrap gap-6 mb-12">
                <a
                  href="#"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full font-semibold shadow-md"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-full font-semibold shadow-md"
                >
                  Contact Me
                </a>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 transform hover:scale-105 transition-transform duration-300">
                  <FaCode className="text-indigo-600 dark:text-indigo-400" size={24} />
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">Web Development</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 transform hover:scale-105 transition-transform duration-300">
                  <FaRocket className="text-yellow-600 dark:text-yellow-400" size={24} />
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">Blockchain</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 transform hover:scale-105 transition-transform duration-300">
                  <FaPalette className="text-pink-600 dark:text-pink-400" size={24} />
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">UI/UX Design</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">My Journey</h3>
              <button
                onClick={toggleTimeline}
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold focus:outline-none"
              >
                {isTimelineVisible ? 'Hide Timeline' : 'Show Timeline'}
              </button>
            </div>
            <AnimatePresence>
              {isTimelineVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
                >
                  {/* Timeline content */}
                  <ul className="timeline space-y-8">
                    <li className="timeline-item">
                      <div className="timeline-item-content bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <span className="timeline-item-date text-gray-500 dark:text-gray-400 text-sm mb-2">2018 - 2020</span>
                        <h4 className="timeline-item-title text-xl font-bold mb-2">Full Stack Developer</h4>
                        <p className="timeline-item-description text-gray-600 dark:text-gray-300">
                          Developed and maintained responsive web applications using modern technologies such as React, Node.js, and MongoDB.
                          Collaborated with cross-functional teams to deliver high-quality software solutions.
                          Implemented RESTful APIs and integrated third-party services to enhance application functionality.
                        </p>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-item-content bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <span className="timeline-item-date text-gray-500 dark:text-gray-400 text-sm mb-2">2020 - 2022</span>
                        <h4 className="timeline-item-title text-xl font-bold mb-2">Blockchain Developer</h4>
                        <p className="timeline-item-description text-gray-600 dark:text-gray-300">
                          Transitioned to blockchain development, specializing in Ethereum and smart contract development using Solidity.
                          Designed and implemented secure and gas-efficient smart contracts for various decentralized applications (DApps).
                          Contributed to the development of a decentralized exchange (DEX) and a yield farming platform.
                        </p>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-item-content bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <span className="timeline-item-date text-gray-500 dark:text-gray-400 text-sm mb-2">2022 - Present</span>
                        <h4 className="timeline-item-title text-xl font-bold mb-2">Senior Blockchain Developer</h4>
                        <p className="timeline-item-description text-gray-600 dark:text-gray-300">
                          Leading the development of cutting-edge decentralized applications and blockchain solutions.
                          Architecting and implementing scalable and secure smart contract systems for enterprise clients.
                          Mentoring junior developers and promoting best practices in blockchain development.
                          Contributing to open-source blockchain projects and actively participating in the blockchain community.
                        </p>
                      </div>
                    </li>
                </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto py-20 px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Projects</h2>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={5000}
            transitionTime={800}
            className="max-w-4xl mx-auto"
          >
            {projectsData.map((project, index) => (
              <div key={index} className="px-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full font-semibold shadow-md"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto py-20 px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Contact Me</h2>
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: true })}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: true })}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  {...register('message', { required: true })}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 dark:bg-gray-900 py-12 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl text-white font-bold mb-4">Favourite quote</h3>
                <p className="text-gray-400">
                "Talk is cheap. Show me the code". - Linus Torvalds
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white font-bold mb-4">Contact Information</h3>
                <p className="text-gray-400">
                  Email: <a href="mailto:thonawangjr@gmail.com" className="text-indigo-400 hover:text-indigo-300">thonawangjr@gmail.com</a>
                </p>
                <p className="text-gray-400">
                  Phone: <a href="tel:+254712577585" className="text-indigo-400 hover:text-indigo-300">+254 712 577 585</a>
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white font-bold mb-4">Connect with Me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/Thonpeter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                    <FaGithub size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/thon-peter-mawut/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://twitter.com/Thon_Awang_jr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                    <FaTwitter size={24} />
                  </a>
                  <a href="https://www.facebook.com/thon.awang.jr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                    <FaFacebook size={24} />
                  </a>
                </div>
              </div>
            </div>
            <hr className="my-8 border-gray-700" />
            <p className="text-center text-gray-400">
              &copy; {new Date().getFullYear()} Thon Peter Mawut. All rights reserved.
            </p>
          </div>
        </footer>

        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </div>
  );
}