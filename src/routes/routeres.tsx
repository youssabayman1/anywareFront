import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dash from '../pages/dash';
import Login from '../pages/loginpage';
import RequireAuth from '../routes/ProtectedRoute';
const AppRoutes: React.FC = () => {
  return (
    <Routes>

      <Route path="/dash" element={<RequireAuth><Dash /></RequireAuth>} /> 
      <Route path="/" element={<Login />} />
      
      {/* You can add more routes here */}
    </Routes>
  );
};

export default AppRoutes;







  
  
  