import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import PageTransition from '../components/shared/PageTransition';
import Section from '../components/shared/Section';
import { useStore } from '../store/useStore';

const EducationPage: React.FC = () => {
  const { t } = useTranslation();
  const { degrees, certifications } = useStore();
  const [activeTab, setActiveTab] = useState('education'); // 'education' or 'certifications'
  
  return (
    <PageTransition>
      <Section 
        title={activeTab === 'education' ? t('education.title') : t('education.certifications')}
        subtitle={
          activeTab === 'education' 
            ? "My academic background and qualifications" 
            : "Professional certifications and continuous learning"
        }
      >
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-background-light p-1 rounded-full">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'education'
                  ? 'bg-primary text-white'
                  : 'text-text-light hover:text-text'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'certifications'
                  ? 'bg-secondary text-white'
                  : 'text-text-light hover:text-text'
              }`}
            >
              Certifications
            </button>
          </div>
        </div>
        
        {/* Education Section */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto">
            {degrees.map((degree, index) => (
              <motion.div
                key={degree.id}
                className="mb-8 bg-background-light rounded-xl p-6 border border-border shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{degree.title}</h3>
                      <div className="bg-primary/10 text-primary px-3 py-0.5 rounded-full text-sm font-medium inline-block sm:ml-2">
                        {degree.year}
                      </div>
                    </div>
                    <p className="text-text-light mb-3">{degree.institution}</p>
                    <p>{degree.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {/* Certifications Section */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="bg-background-light rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                    <p className="text-text-light mb-2">{cert.issuer} • {cert.date}</p>
                    <p className="text-sm mb-3">
                      <strong>Credential:</strong> {cert.credential}
                    </p>
                    {cert.url && (
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 text-sm font-medium"
                      >
                        Verify Certificate →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </Section>
    </PageTransition>
  );
};

export default EducationPage;