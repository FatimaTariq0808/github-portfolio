import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Smartphone,
  Globe,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Shufti (Identity Verification)",
      description:
        "Contributed to identity-verification products by implementing phone and email intelligence features using Laravel[cite: 31, 32]. Developed document expiry monitoring and automated email notifications[cite: 33]. Implemented age-verification services using facial recognition and ID data extraction[cite: 34].",
      image:
        "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Laravel", "SendGrid", "Twilio", "Facial Recognition"],
      category: "Professional Project",
      icon: ShieldCheck,
      github: "https://github.com/FatimaTariq0808",
      features: [
        "Identity Verification [cite: 31]",
        "SendGrid & Twilio [cite: 32]",
        "Expiry Monitoring [cite: 33]",
        "Age-Verification [cite: 34]",
      ],
    },
    {
      title: "ClickUp (Task Management)",
      description:
        "Developed backend services for a task and project management platform using Laravel and Node.js[cite: 36]. Designed RESTful APIs and database schemas while implementing role-based access control and real-time updates[cite: 37, 38].",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Laravel", "Node.js", "RESTful APIs", "Database Design"],
      category: "Professional Project",
      icon: Briefcase,
      github: "https://github.com/FatimaTariq0808",
      features: [
        "RESTful API Design [cite: 37]",
        "Schema Architecture [cite: 37]",
        "Access Control [cite: 38]",
        "Real-Time Updates [cite: 38]",
      ],
    },
    {
      title: "Shaping Homes",
      description:
        "Developed a cross-platform mobile application using React Native[cite: 40]. Built backend services using Node.js and Express.js, integrating AI modules for personalized home recommendations[cite: 40, 41].",
      image:
        "https://images.pexels.com/photos/8293771/pexels-photo-8293771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React Native", "Node.js", "Express.js", "AI"],
      category: "Final Year Project",
      icon: Smartphone,
      github: "https://github.com/FatimaTariq0808/FYP",
      features: [
        "React Native App [cite: 40]",
        "Node.js Backend [cite: 40]",
        "AI AI Modules [cite: 41]",
        "Home Recommendations [cite: 41]",
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
            A showcase of professional experience and technical expertise in full-stack development[cite: 5].
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="relative overflow-hidden shrink-0">
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

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                  >
                    <Github size={18} />
                  </a>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-1 min-h-[60px]">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="text-xs text-gray-600 flex items-center"
                      >
                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-2 shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
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
              View All Projects on GitHub
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;