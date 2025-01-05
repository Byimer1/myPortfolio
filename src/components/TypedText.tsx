import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypedTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export const TypedText = ({ text, speed = 100, className = '' }: TypedTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {displayedText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </motion.span>
  );
};