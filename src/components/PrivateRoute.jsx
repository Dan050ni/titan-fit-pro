// src/components/PrivateRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children, adminOnly = false }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // No autenticado
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== 'admin') {
    // No autorizado
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
