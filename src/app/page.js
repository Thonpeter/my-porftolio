"use client";

import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaPalette, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';

export default function Home() {
  const typedRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.2 });
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectsData = [
    {
      title: 'Decentralized Finance App',
      description: 'A cutting-edge DeFi application built on Ethereum, enabling users to lend, borrow, and trade cryptocurrency assets securely.',
      image: '/project1.jpg',
      link: '#',
    },
    {
      title: 'NFT Marketplace',
      description: 'A decentralized marketplace for creating, buying, and selling unique digital assets as Non-Fungible Tokens (NFTs) on the blockchain.',
      image: '/project2.jpg',
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

  return (
    <div className="bg-gradient-to-r from-gray-900 to-slate-900 min-h-screen text-white relative">
      {/* Navigation Bar */}
      <nav className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight">Thon Peter Mawut</div>
        <div className="hidden md:flex space-x-8 font-semibold">
          <a href="#home" className="hover:text-indigo-400 transition-colors duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-indigo-400 transition-colors duration-300">
            About
          </a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors duration-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors duration-300">
            Contact
          </a>
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
          className="text-4xl sm:text-6xl font-bold mb-6"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl mb-8"
        >
          Hi, I&apos;m Thon Peter Mawut, a{' '}
          <span ref={typedRef} className="text-indigo-400 font-bold"></span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex space-x-4"
        >
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 py-3 px-8 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-pink-600 hover:bg-pink-700 py-3 px-8 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
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
            <animated.h2 style={titleAnimation} className="text-4xl font-bold mb-4">
              About Me
            </animated.h2>
            <p className="text-xl mb-6">
              Full stack developer with expertise in blockchain technology and smart contract development, creating innovative decentralized applications. Passionate about leveraging the power of blockchain to build secure, transparent, and efficient solutions.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#"
                className="bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-full font-semibold shadow-md"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="bg-pink-600 hover:bg-pink-700 py-2 px-4 rounded-full font-semibold shadow-md"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <FaCode className="text-indigo-400" size={24} />
                  <span className="text-lg font-semibold">Web Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaRocket className="text-yellow-400" size={24} />
                  <span className="text-lg font-semibold">Blockchain</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPalette className="text-pink-400" size={24} />
                  <span className="text-lg font-semibold">UI/UX Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-20 px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
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
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
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
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: true })}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { required: true })}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                {...register('message', { required: true })}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
      <footer className="bg-gray-800 py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; {new Date().getFullYear()} Thon Peter Mawut. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://github.com/Thonpeter" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white hover:text-indigo-400 transition-colors duration-300" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/thon-peter-mawut-3a0a44186/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-indigo-400 transition-colors duration-300" size={24} />
            </a>
            <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-indigo-400 transition-colors duration-300" size={24} />
            </a>
          </div>
        </div>
      </footer>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}