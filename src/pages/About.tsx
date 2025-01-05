import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TechStack } from '../components/TechStack';
import profilePic from '../assets/images/profilepic.jpg';

export const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>About Me</SectionHeading>
        
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <img
              src={profilePic}
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
            />
            <p className="text-lg text-gray-400 italic mb-8">
              "Passionate about intuitive design and elegant code"
            </p>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-300">
                I'm a passionate Full Stack Developer with expertise in both frontend and backend technologies.
                With a strong foundation in multiple programming languages and frameworks, I specialize in
                building scalable web applications that provide exceptional user experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h2>
            <TechStack />
          </motion.div>
        </div>
      </div>
    </div>
  );
};