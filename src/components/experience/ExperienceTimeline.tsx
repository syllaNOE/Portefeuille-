import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { IExperience } from '../../types';

interface ExperienceTimelineProps {
  experiences: IExperience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 w-0.5 h-full bg-border md:-ml-0.5"></div>
      
      {/* Experience items */}
      {experiences.map((experience, index) => (
        <motion.div 
          key={experience.id}
          className="mb-12 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 w-5 h-5 bg-primary rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center">
              <div className="w-3 h-3 bg-background rounded-full"></div>
            </div>
            
            {/* Date */}
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8 md:text-right flex flex-col justify-center mb-4 md:mb-0">
              <div className={`inline-flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {experience.date}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
              <div className="bg-background-light p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <p className="text-text-light">{experience.company}</p>
                  </div>
                </div>
                <p className="mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-background px-3 py-1 rounded-full text-xs font-medium border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;