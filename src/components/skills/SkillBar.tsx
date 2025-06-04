import React from 'react';
import { motion } from 'framer-motion';
import { ISkill } from '../../types';

interface SkillBarProps {
  skill: ISkill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-text-light">{skill.level}%</span>
      </div>
      <div className="h-3 w-full bg-background-light rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: "easeOut" }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SkillBar;