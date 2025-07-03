import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Proficient in multiple programming languages and frameworks with a focus on clean, maintainable code.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experienced in working with cross-functional teams and contributing to collaborative development environments.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Passionate about exploring new technologies and implementing creative solutions to complex problems.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Committed to delivering high-quality results and continuously improving development processes.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As a dedicated Computer Scientist, I bring a unique blend of technical expertise 
            and creative problem-solving to every project. My journey in software development 
            has been driven by curiosity, continuous learning, and a commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Journey
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                With experience across various technologies and industries, I've had the 
                opportunity to work on diverse projects ranging from web applications to 
                mobile development and enterprise solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I believe in the power of technology to solve real-world problems and 
                am constantly seeking new challenges that push the boundaries of what's possible.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">5+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-teal-600 mb-1">3</div>
                <div className="text-gray-600 text-sm">Companies</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">10+</div>
                <div className="text-gray-600 text-sm">Technologies</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                <div className="text-gray-600 text-sm">Commitment</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;