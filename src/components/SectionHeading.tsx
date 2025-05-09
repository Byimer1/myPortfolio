import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-bold mb-8 text-center"
    >
      {children}
    </motion.h2>
  );
};