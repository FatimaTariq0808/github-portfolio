import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Programmers Force',
      position: 'Associate Software Engineer',
      period: 'April 2025 - October 2025',
      location: 'Lahore, Pakistan',
      type: 'Full-time',
      description: 'Working on backend development using Laravel (PHP) and Node.js. Responsible for building and maintaining RESTful APIs, managing relational and non-relational databases, and deploying services in containerized environments.',
      achievements: [
        'Developed and maintained scalable RESTful APIs using Laravel and Node.js',
        'Handled complex database operations with MongoDB, PostgreSQL, and MySQL',
        'Managed microservices and deployments using Docker',
        'Streamlined CI/CD processes using GitLab pipelines and code reviews'
      ],
      technologies: ['Laravel', 'Node.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'Docker', 'GitLab'],
      color: 'from-green-500 to-green-700'
    },    
    {
      company: 'Bank of Punjab',
      position: 'Application Security Officer',
      period: 'July 2024 - April 2025',
      location: 'Lahore, Pakistan',
      type: 'Full-time',
      description: 'Conducted security assessments of web applications using industry-standard tools and methodologies. Identified vulnerabilities, provided remediation guidance, and collaborated with development teams to ensure secure coding practices and compliance with organizational security standards.',
      achievements: [
        'Performed application security testing using Kali Linux, Burp Suite, and OWASP ZAP',
        'Discovered and documented critical vulnerabilities across internal platforms',
        'Provided detailed remediation reports to development teams',
        'Promoted adoption of secure coding standards and best practices'
      ],
      technologies: ['Kali Linux', 'Burp Suite', 'OWASP ZAP', 'Secure Coding', 'Web Security'],
      color: 'from-red-500 to-red-700'
    },    
    {
      company: 'Qwerty Experts',
      position: 'Data Science Intern',
      period: 'July 2023 - August 2023',
      location: 'Lahore, Pakistan',
      type: 'Internship',
      description: 'Explored fundamental concepts of web development and backend integration. Built small-scale projects using HTML and Bootstrap for frontend design, and Flask for backend functionality. Implemented basic CRUD operations and handled database management with MySQL.',
      achievements: [
        'Developed mini-projects combining frontend and backend technologies',
        'Practiced CRUD operations with Flask and MySQL',
        'Built responsive interfaces using Bootstrap',
        'Gained exposure to backend workflows and database structuring'
      ],
      technologies: ['HTML', 'Bootstrap', 'Flask', 'MySQL'],
      color: 'from-yellow-500 to-yellow-700'
    }    
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey showcasing growth, achievements, and contributions 
            across different organizations and technology stacks.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-teal-600 hidden lg:block"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 lg:mb-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

              <div className={`lg:${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                <motion.div
                  whileHover={{ y: -5, shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {experience.position}
                      </h3>
                      <h4 className="text-xl font-semibold text-blue-600 mb-2">
                        {experience.company}
                      </h4>
                    </div>
                    <div className={`bg-gradient-to-r ${experience.color} text-white px-4 py-2 rounded-lg text-sm font-medium`}>
                      {experience.type}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {experience.location}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Award size={18} className="text-orange-500" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-700 flex items-start gap-2">
                          <TrendingUp size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
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
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new projects and contribute to innovative teams. 
              Let's discuss how I can help bring your ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;