import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import LoginForm from '../admin/LoginForm';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useStore();
  
  useEffect(() => {
    // You can add additional logic here, like checking token expiration
  }, []);
  
  // If user is not authenticated, show login form
  if (!isAuthenticated) {
    return <LoginForm />;
  }
  
  // Otherwise, render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;