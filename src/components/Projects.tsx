import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Smartphone,
  Globe,
  Database,
  Users,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Shaping Homes",
      description:
        "A smart mobile application designed to simplify the property search and real estate management experience. Built using React Native and powered by a Node.js and Express.js backend, the app leverages AI modules to recommend property prices. It supports dynamic user data through MongoDB and integrates intelligent features to streamline buying, selling, and bidding processes.",
      image:
        "https://images.pexels.com/photos/8293771/pexels-photo-8293771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "AI"],
      category: "Mobile Application",
      icon: Smartphone,
      github: "https://github.com/FatimaTariq0808/FYP",
      features: [
        "Smart Property Search",
        "Real-Time Bidding System",
        "User Authentication & Profiles",
        "AI-Based Price Suggestions",
      ],
    },
    {
      title: "Coin Bounce",
      description:
        "A cryptocurrency web application designed for real-time market tracking and blog management. Built with an interface using React, the platform provides intuitive navigation and seamless user engagement. The backend is powered by Node.js and Express.js for efficient data handling, while third-party APIs are integrated to fetch live cryptocurrency and blockchain currency values.",
      image:
        "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "Express.js", "Third-Party APIs"],
      category: "Web Application",
      icon: Globe,
      github: "https://github.com/FatimaTariq0808/Coin-Bounce",
      features: [
        "Live Cryptocurrency Data",
        "Blog Management",
        "Responsive UI",
        "Blockchain Price Integration",
      ],
    },
    {
      title: "Opay",
      description:
        "A fully functional e-commerce platform focused on secure transactions and user-driven enhancements. The frontend was developed using React, while the backend was powered by Node.js and Express.js for seamless data processing. Integrated payment systems ensure secure transactions, and improvements were made by incorporating user feedback and optimizing the overall experience.",
      image:
        "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      category: "E-Commerce Application",
      icon: Code,
      github: "https://github.com/FatimaTariq0808/Opay",
      features: [
        "E-commerce Functionality",
        "Comments",
        "Transaction Management",
        "Secure Payment Integration",
      ],
    },
    {
      title: "Library Management System",
      description:
        "A library management solution designed to streamline book tracking, and library operations. The frontend was developed using ASP.NET, CSS, and HTML to ensure seamless functionality and an intuitive interface. The system supports a comprehensive book catalog, member management, and reporting, making it ideal for academic libraries.",
      image:
        "https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["ASP.NET", "HTML", "CSS", "MySQL"],
      category: "Web Application",
      icon: Database,
      github: "https://github.com/FatimaTariq0808/Library-Management-System",
      features: [
        "Book Catalog Management",
        "Lending & Return System",
        "Member Registration",
        "Reports Analytics",
      ],
    },
    {
      title: "Candy Crush",
      description:
        "A console-based version of the classic Candy Crush game, developed using C++. Features include interactive gameplay, dynamic logic handling, and a smooth user experience built entirely in a text-based environment. Core mechanics like match detection, cascading effects, and score tracking were implemented with efficient C++ logic",
      image:
        "https://sm.ign.com/t/ign_za/articlepage/l/london-orchestra-plays-candy-crush-soda-saga-theme/london-orchestra-plays-candy-crush-soda-saga-theme_c9ag.2560.jpg",
      technologies: ["C++", "OOP", "Data Structures"],
      category: "Game Development",
      icon: Users,
      github: "https://github.com/FatimaTariq0808/Candy-Crush",
      features: [
        "Match-3 Logic",
        "Interactive Gameplay",
        "Dynamic Scoring System",
        "Level-Based Progression",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across various
            technologies and domains from web applications to mobile
            development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {project.category}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-2 rounded-lg">
                    <project.icon className="text-white" size={20} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="text-xs text-gray-600 flex items-center"
                      >
                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {/* Full-width "View Project" button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                    >
                      View Project
                    </motion.button>
                  </a>

                  {/* GitHub icon button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
