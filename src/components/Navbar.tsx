// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-pink-500 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-white font-heading text-2xl">
          Lokesh Chaudhari
        </a>
        <div className="space-x-6">
          <a
            href="#about"
            className="text-white font-medium hover:text-indigo-100 transition duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white font-medium hover:text-indigo-100 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white font-medium hover:text-indigo-100 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
