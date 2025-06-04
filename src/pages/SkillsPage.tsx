import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';
import Section from '../components/shared/Section';
import SkillBar from '../components/skills/SkillBar';
import { useStore } from '../store/useStore';
import { ISkill } from '../types';

const SkillsPage: React.FC = () => {
  const { t } = useTranslation();
  const { skills } = useStore();
  const [activeTab, setActiveTab] = useState('dataScience');
  
  // Group skills by category
  const skillsByCategory: Record<string, ISkill[]> = {
    dataScience: skills.filter(skill => skill.category === 'dataScience'),
    bi: skills.filter(skill => skill.category === 'bi'),
    ml: skills.filter(skill => skill.category === 'ml'),
    cloud: skills.filter(skill => skill.category === 'cloud'),
    tools: skills.filter(skill => skill.category === 'tools')
  };
  
  const categories = [
    { id: 'dataScience', label: t('skills.categories.dataScience') },
    { id: 'bi', label: t('skills.categories.bi') },
    { id: 'ml', label: t('skills.categories.ml') },
    { id: 'cloud', label: t('skills.categories.cloud') },
    { id: 'tools', label: t('skills.categories.tools') }
  ];
  
  return (
    <PageTransition>
      <Section 
        title={t('skills.title')}
        subtitle="My technical expertise and proficiency levels"
      >
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === category.id
                  ? 'bg-primary text-white'
                  : 'bg-background-light hover:bg-background-light/80'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="max-w-3xl mx-auto">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2"
          >
            {skillsByCategory[activeTab].map((skill, index) => (
              <SkillBar 
                key={skill.id}
                skill={skill}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </Section>
    </PageTransition>
  );
};

export default SkillsPage;