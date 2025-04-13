// src/components/Skills.tsx
import React from 'react';

const skills = [
  { name: 'HTML', icon: '/images/html-icon' },
  { name: 'CSS', icon: '/images/css-icon' },
  { name: 'JavaScript', icon: '/images/javascript-icon' },
  { name: 'React', icon: '/images/react-icon' },
  { name: 'TypeScript', icon: '/images/typescript-icon.png' },
  { name: 'Tailwind CSS', icon: '/images/tailwind-icon.png' },
  { name: 'Git', icon: '/images/git-icon' },
  { name: 'Node.js', icon: '/images/nodejs-icon' }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md text-center text-gray-700 hover:bg-indigo-50 hover:shadow-xl transition transform hover:scale-105"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-20 h-20 mx-auto mb-4"
            />
            <span className="block text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
