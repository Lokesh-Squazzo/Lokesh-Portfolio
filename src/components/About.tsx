// src/components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-6 font-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6 font-light font-sans"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          Hey! I’m Lokesh, a passionate developer, tech enthusiast, and esports caster 🚀. I specialize in building
          beautiful, responsive websites using React, TailwindCSS, and TypeScript. When I'm not coding, you can find me
          casting exciting esports matches, connecting with the community, and sharing my love for gaming!
        </motion.p>
        <motion.p
          className="text-lg md:text-xl mb-6 font-light font-sans"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
        >
          My journey started with a deep passion for gaming, and over time, I transitioned into game development and
          esports casting. Now, I blend my technical skills with my love for gaming to create engaging experiences for the
          community. Whether it's coding a new project, casting a tournament, or streaming live — I’m always excited to
          learn and share knowledge.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl mb-6 font-light font-sans"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6 }}
        >
          As an esports caster, I have had the privilege of casting major tournaments and engaging with the vibrant
          esports community. It’s a thrilling experience that allows me to combine my technical skills with my passion for
          gaming. If you’re interested in collaborating or just want to chat about tech and esports, feel free to reach out!
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-gradient-to-r from-[#9333EA] to-[#D946EF] text-white px-8 py-4 rounded-full shadow-xl text-lg font-semibold transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          Let's Connect
        </motion.a>
      </div>
    </section>
  );
};

export default About;
