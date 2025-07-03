import React, { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const skillCategories = {
    languages: {
      title: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          level: 90,
          color: "from-yellow-400 to-yellow-600",
        },
        { name: "PHP", level: 85, color: "from-purple-400 to-purple-600" },
        { name: "Python", level: 85, color: "from-blue-400 to-blue-600" },
        { name: 'C++', level: 85, color: 'from-red-400 to-red-600' },
        { name: 'C', level: 70, color: 'from-cyan-400 to-cyan-600' },
        { name: "TypeScript", level: 75, color: "from-blue-500 to-blue-700" }
      ],
    },
    frameworks: {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Laravel", level: 90, color: "from-red-500 to-red-700" },
        { name: "React", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "React Native", level: 85, color: "from-cyan-400 to-cyan-600" },
        { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
        { name: 'Flask', level: 75, color: 'from-yellow-400 to-yellow-600' },
        { name: "Vue.js", level: 70, color: "from-blue-500 to-blue-700" },
        // { name: "FastAPI", level: 75, color: "from-yellow-400 to-yellow-600" },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      skills: [
        { name: "Docker", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "GitLab", level: 85, color: "from-orange-400 to-orange-600" },
        { name: "Git", level: 90, color: "from-red-400 to-red-600" },
        { name: "MySQL", level: 85, color: "from-blue-500 to-blue-700" },
        {
          name: "PostgreSQL",
          level: 75,
          color: "from-indigo-400 to-indigo-600",
        },
        { name: "MongoDB", level: 80, color: "from-yellow-500 to-orange-500" },
      ],
    },
  };

  const techList = [
    "Laravel",
    "React",
    "Node.js",
    "Docker",
    "MySQL",
    "PostgreSQL",
    "React Native",
    "Flutter",
    "Git",
    "GitLab",
    "MongoDB",
    "Vue.js",
    "TypeScript",
    "Python",
    "PHP",
    "JavaScript",
  ];
  const fullList = [...techList, ...techList];

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various
            programming languages, frameworks, and development tools.
          </p>
        </motion.div>
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-xl p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {
                  skillCategories[category as keyof typeof skillCategories]
                    .title
                }
              </button>
            ))}
          </div>
        </motion.div>
        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories[
            activeCategory as keyof typeof skillCategories
          ].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-gray-600">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Technology Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="overflow-visible">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex space-x-6 min-w-max"
            >
              {fullList.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white px-6 py-4 rounded-full shadow-md font-medium text-gray-700 hover:scale-105 transition-transform duration-200"
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
