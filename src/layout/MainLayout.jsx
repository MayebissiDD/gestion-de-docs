import React from 'react';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar pour la navigation, déjà responsive */}
      <Sidebar />
      {/* Contenu principal */}
      <div className="flex-1 p-6 bg-gray-100 md:ml-64">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
