'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-950 dark:to-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Thon Peter Mawut</h3>
            <p className="text-gray-400 mb-4">
              Computer Science Teacher • Full Stack Developer • Data Analyst
            </p>
            <p className="text-sm text-gray-500">
              &quot;Talk is cheap. Show me the code.&quot; - Linus Torvalds
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Thonpeter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-800/50 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700/50 hover:border-indigo-500"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/thon-peter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-800/50 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700/50 hover:border-indigo-500"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:thonawangjr@gmail.com"
                className="w-12 h-12 flex items-center justify-center bg-gray-800/50 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700/50 hover:border-indigo-500"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Juba, South Sudan
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 flex items-center justify-center gap-2">
            &copy; {currentYear} Thon Peter Mawut. Made with{' '}
            <FaHeart className="text-red-500" size={16} /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

