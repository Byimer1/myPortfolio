import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import resume from '../assets/Biruk_Yimer_Resume_3_.pdf';

export const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/byimer1',
      icon: <Github size={24} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/biruk-yimer-17a19220a/',
      icon: <Linkedin size={24} />,
    },
    {
      name: 'Email',
      url: 'mailto:birukesh24@gmail.com',
      icon: <Mail size={24} />,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Get in Touch</SectionHeading>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to new opportunities and collaborations. Feel free to
              reach out through the form or any of my social profiles.
            </p>

            <div className="flex flex-col gap-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            <a

              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 
                       text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <FileText size={20} />
              Download Resume
            </a>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};
