import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Award, Calendar } from 'lucide-react';

const StatsSection: React.FC = () => {
  const { t } = useTranslation();
  
  const stats = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      count: 6,
      label: t('about.stats.projects'),
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      count: 4,
      label: t('about.stats.certifications'),
    },
    {
      icon: <Calendar className="w-8 h-8 text-accent" />,
      count: 2,
      label: t('about.stats.experience'),
    },
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };
  
  return (
    <div className="py-12 bg-background-light/50 backdrop-blur-sm border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center bg-background p-6 rounded-xl shadow-sm border border-border"
              variants={item}
            >
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="flex items-center">
                <motion.span 
                  className="text-4xl font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1.5, delay: 0.2 }
                  }}
                  viewport={{ once: true }}
                >
                  {stat.count}+
                </motion.span>
              </div>
              <span className="text-text-light text-lg mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;