import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/shared/PageTransition';
import Section from '../components/shared/Section';
import ExperienceTimeline from '../components/experience/ExperienceTimeline';
import { useStore } from '../store/useStore';

const ExperiencePage: React.FC = () => {
  const { t } = useTranslation();
  const { experiences } = useStore();
  
  return (
    <PageTransition>
      <Section 
        title={t('experience.title')}
        subtitle="My professional journey and projects"
      >
        <ExperienceTimeline experiences={experiences} />
      </Section>
    </PageTransition>
  );
};

export default ExperiencePage;