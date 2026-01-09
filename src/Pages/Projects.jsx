import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Car Rental System",
    description:
      "A full stack car rental web application using Java, Hibernate, JSP, and MySQL.",
    tech: ["Java", "Hibernate", "MySQL", "JSP"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Website",
    description:
      "An e-commerce platform built with Spring Boot, React, and MySQL.",
    tech: ["Spring Boot", "React", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Art Gallery Project",
    description:
      "An interactive art gallery web app with category-based filtering.",
    tech: ["Java", "JDBC", "HTML", "CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built using React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 sm:px-10 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-12 text-center mt-10">
        My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-orange-500 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300 bg-gray-800"
          >
            <h3 className="text-xl font-bold text-orange-400 mb-3">
              {project.title}
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-orange-500 text-black px-3 py-1 rounded-full font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-sm border border-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-black transition"
              >
                <Github size={16} /> GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                className="flex items-center gap-2 text-sm border border-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-black transition"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Go to Home Button */}
      <div className="flex justify-center mt-12">
        <Link
          to="/"
          className="flex items-center gap-2 border border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-orange-500 hover:text-black transition"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default Projects;
