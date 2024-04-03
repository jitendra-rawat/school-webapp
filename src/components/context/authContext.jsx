import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [accessToken, setAccessToken] = useState(() => {

    return localStorage.getItem('accessToken') || '';
  });


  const login = (token) => {
    setAccessToken(token);
    localStorage.setItem('accessToken', token);
   
  };

  const logout = () => {
    setAccessToken('');
    localStorage.removeItem('accessToken');
   
   
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};