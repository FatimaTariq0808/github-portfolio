import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Smartphone,
  Globe,
  Database,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Shufti (Identity Verification)",
      description:
        "Contributed to identity-verification products by implementing phone and email intelligence features. Developed document expiry monitoring and automated email notifications. Implemented age-verification services using facial recognition and ID data extraction.",
      image:
        "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Laravel", "SendGrid", "Twilio", "Facial Recognition"],
      category: "Professional Project",
      icon: ShieldCheck,
      github: "https://github.com/FatimaTariq0808",
      features: [
        "Identity Verification Features [cite: 31]",
        "SendGrid & Twilio Integration [cite: 32]",
        "Document Expiry Monitoring [cite: 33]",
        "Age-Verification Services [cite: 34]",
      ],
    },
    {
      title: "ClickUp (Task Management)",
      description:
        "Developed backend services for a task and project management platform. Designed RESTful APIs and database schemas while implementing role-based access control and real-time updates.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Backend Development", "RESTful APIs", "Database Design"],
      category: "Professional Project",
      icon: Briefcase,
      github: "https://github.com/FatimaTariq0808",
      features: [
        "RESTful API Design [cite: 37]",
        "Database Schema Architecture [cite: 37]",
        "Role-Based Access Control [cite: 38]",
        "Real-Time Updates [cite: 38]",
      ],
    },
    {
      title: "Shaping Homes",
      description:
        "Developed a cross-platform mobile application using React Native and built backend services using Node.js and Express.js. Integrated AI modules for personalized home recommendations.",
      image:
        "https://images.pexels.com/photos/8293771/pexels-photo-8293771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React Native", "Node.js", "Express.js", "AI"],
      category: "Final Year Project",
      icon: Smartphone,
      github: "https://github.com/FatimaTariq0808/FYP",
      features: [
        "Cross-Platform Mobile App [cite: 40]",
        "Node.js Backend [cite: 40]",
        "AI Recommendation Modules [cite: 41]",
        "Home Recommendations [cite: 41]",
      ],
    },
    // {
    //   title: "Coin Bounce",
    //   description:
    //     "A cryptocurrency web application designed for real-time market tracking and blog management. Built with React for the interface and Node.js for data handling, integrating third-party APIs for live values.",
    //   image:
    //     "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   technologies: ["React", "Node.js", "Express.js", "Third-Party APIs"],
    //   category: "Web Application",
    //   icon: Globe,
    //   github: "https://github.com/FatimaTariq0808/Coin-Bounce",
    //   features: [
    //     "Live Cryptocurrency Data",
    //     "Blog Management",
    //     "Responsive UI",
    //     "Blockchain Integration",
    //   ],
    // },
    // {
    //   title: "Opay",
    //   description:
    //     "A functional e-commerce platform focused on secure transactions. Built using React, Node.js, and MongoDB, featuring payment system integration and optimized user experience based on feedback.",
    //   image:
    //     "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    //   category: "E-Commerce Application",
    //   icon: Code,
    //   github: "https://github.com/FatimaTariq0808/Opay",
    //   features: [
    //     "E-commerce Functionality",
    //     "Secure Payments",
    //     "Transaction Management",
    //     "User Feedback Integration",
    //   ],
    // },
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
            Professional experience and technical projects showcasing expertise 
            in full-stack development, API design, and mobile applications.
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
          <a href="https://github.com/FatimaTariq0808" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              View All Projects
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;