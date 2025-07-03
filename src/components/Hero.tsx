import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/Fatima Tariq_Resume.pdf';
    link.download = 'Fatima Tariq_Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-teal-500 p-1 mb-8">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-6xl font-bold text-gray-600">
                FT
              </div>
            </div> */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Fatima Tariq
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-600 mb-8"
          >
            Computer Scientist & Software Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Motivated Computer Scientist with a passion for learning and development, 
            skilled in collaborative environments, and eager to contribute to innovative teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
            
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/FatimaTariq0808"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/fatima-tariq-1476b427a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="mailto:fatimatariq0802@gmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Mail size={28} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;