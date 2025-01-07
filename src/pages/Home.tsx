import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TypedText } from '../components/TypedText';

export const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center z-10 space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          Hi, I'm <TypedText text="Biruk Yimer" speed={150} />
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Full Stack Developer | Building scalable solutions with modern technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/about"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold 
                     hover:bg-blue-700 transition-colors duration-300 w-48"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="px-8 py-3 bg-white text-black rounded-full font-semibold 
                     hover:bg-gray-200 transition-colors duration-300 w-48"
          >
            Explore My Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 bg-gray-800 text-white rounded-full font-semibold 
                     hover:bg-gray-700 transition-colors duration-300 w-48"
          >
            Get in Touch
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-6 pt-8"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};