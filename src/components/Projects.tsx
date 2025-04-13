// src/components/Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      name: "QR Code-Based Voter Verification System",
      description: "A secure and efficient QR Code-based voter verification system for smooth election processes.",
      image: "/images/qr-code-attendance.jpg", // Replace with your project image path
      link: "https://github.com/jayesh2160/project1" // Link to project repository or demo
    },
    {
      name: "EduQR Attendance Platform",
      description: "A web platform that simplifies attendance tracking using QR codes.",
      image: "/images/EduQR.jpeg", // Replace with your project image path
      link: "https://github.com/jayesh2160/project2" // Link to project repository or demo
    },
    {
      name: "Automated Code Review System",
      description: "An automated system for reviewing code quality and ensuring consistency.",
      image: "/images/project3.png", // Replace with your project image path
      link: "https://github.com/jayesh2160/project3" // Link to project repository or demo
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-center">
      <h2 className="text-3xl font-bold text-white mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-xl border border-pink-200 hover:scale-105 transition-transform duration-300">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-72 object-cover rounded-md mb-6"
            />
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">{project.name}</h3>
            <p className="text-gray-700 mb-6">{project.description}</p>
            {/* <a
              href={project.link}
              className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
