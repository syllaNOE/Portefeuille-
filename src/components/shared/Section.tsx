import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = '',
  delay = 0.1
}) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        delay: delay 
      } 
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        delay: delay + 0.2,
        staggerChildren: 0.1,
        delayChildren: delay + 0.3
      } 
    }
  };
  
  return (
    <section className={`w-full py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          {subtitle && (
            <p className="text-text-light text-lg max-w-2xl mx-auto">{subtitle}</p>
          )}
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={contentVariants}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;