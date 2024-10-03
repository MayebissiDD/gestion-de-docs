import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUpload, FaFile, FaFolder, FaUser, FaCog, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la sidebar

  return (
    <div>
      {/* Menu hamburger pour mobile */}
      <div className="md:hidden p-4 bg-gray-800 text-white">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Sidebar fixe sur écran large et responsive sur mobile */}
      <div 
        className={`bg-gray-800 text-white w-64 h-screen fixed transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300`}
      >
        {/* Logo */}
        <div className="p-6 text-2xl font-bold text-center">MonLogo</div>

        {/* Navigation Links */}
        <nav className="flex-grow">
          <ul className="space-y-2">
            {/* Dashboard Link */}
            <li>
              <NavLink 
                to="/dashboard" 
                className="flex items-center space-x-2 p-4 hover:bg-gray-700 focus:bg-gray-600 rounded-lg no-underline mx-2"
                activeClassName="bg-gray-700"
              >
                <FaHome className="text-xl" />
                <span>Tableau de bord</span>
              </NavLink>
            </li>

            {/* Upload Link */}
            <li>
              <NavLink 
                to="/upload" 
                className="flex items-center space-x-2 p-4 hover:bg-gray-700 focus:bg-gray-600 rounded-lg no-underline mx-2"
                activeClassName="bg-gray-700"
              >
                <FaUpload className="text-xl" />
                <span>Importer</span>
              </NavLink>
            </li>

            {/* Documents Link */}
            <li>
              <NavLink 
                to="/documents" 
                className="flex items-center space-x-2 p-4 hover:bg-gray-700 focus:bg-gray-600 rounded-lg no-underline mx-2"
                activeClassName="bg-gray-700"
              >
                <FaFile className="text-xl" />
                <span>Documents</span>
              </NavLink>
            </li>

            {/* Folders Link */}
            <li>
              <NavLink 
                to="/folders" 
                className="flex items-center space-x-2 p-4 hover:bg-gray-700 focus:bg-gray-600 rounded-lg no-underline mx-2"
                activeClassName="bg-gray-700"
              >
                <FaFolder className="text-xl" />
                <span>Dossiers</span>
              </NavLink>
            </li>

            {/* Users Link */}
            <li>
              <NavLink 
                to="/users" 
                className="flex items-center space-x-2 p-4 hover:bg-gray-700 focus:bg-gray-600 rounded-lg no-underline mx-2"
                activeClassName="bg-gray-700"
              >
                <FaUser className="text-xl" />
                <span>Utilisateurs</span>
              </NavLink>
            </li>

            {/* Settings Link */}
            <li>
              <NavLink 
                to="/settings" 
                className="flex items-center space-x-2 p-4 hover:bg-gray-700 focus:bg-gray-600 rounded-lg no-underline mx-2"
                activeClassName="bg-gray-700"
              >
                <FaCog className="text-xl" />
                <span>Paramètres</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 mx-2">
          <NavLink 
            to="/login" 
            className="flex items-center space-x-2 p-4 bg-red-600 hover:bg-red-700 rounded-lg justify-center no-underline"
          >
            <span>Déconnexion</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
