"use client";

import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">THON PETER</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
            Home
          </Link>
          <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
            About
          </Link>
          <Link href="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
            Projects
          </Link>
          <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;