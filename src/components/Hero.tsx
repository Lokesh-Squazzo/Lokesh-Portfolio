// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white px-4"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-center drop-shadow-lg mb-4">
        Hey! I’m Lokesh 🚀
      </h1>
      <p className="text-lg md:text-2xl text-center max-w-xl font-light mb-6">
        I love building beautiful and responsive websites using React, TailwindCSS, and TypeScript.
      </p>
      <a
        href="#projects"
        className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
