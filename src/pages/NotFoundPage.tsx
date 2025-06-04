import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import Button from '../components/shared/Button';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex justify-center items-center w-20 h-20 mb-8 bg-error/10 rounded-full">
          <AlertTriangle className="h-10 w-10 text-error" />
        </div>
        
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">{t('common.notFound')}</h2>
        <p className="text-text-light mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Button variant="primary" to="/">
          {t('common.back')}
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;