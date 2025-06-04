import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Database, Lock } from 'lucide-react';
import { useStore } from '../../store/useStore';
import Button from '../shared/Button';
import PageTransition from '../shared/PageTransition';

// For demonstration purposes, we're using a hard-coded password
// In a real application, you would use a proper authentication system
const DEMO_PASSWORD = 'admin123';

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const { login } = useStore();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === DEMO_PASSWORD) {
      login();
      setError('');
    } else {
      setError('Invalid password');
    }
  };
  
  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center px-4">
        <motion.div 
          className="w-full max-w-md p-8 bg-background-light rounded-xl shadow-lg border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">{t('admin.login')}</h2>
            <p className="text-text-light mt-2 text-center">
              Enter your password to access the admin dashboard
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-text mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-text-light" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-border rounded-md leading-5 bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-error">{error}</p>
              )}
              <p className="mt-2 text-xs text-text-light">
                <strong>Demo password:</strong> admin123
              </p>
            </div>
            
            <Button 
              variant="primary" 
              size="lg" 
              type="submit"
              className="w-full"
            >
              {t('admin.login')}
            </Button>
          </form>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default LoginForm;