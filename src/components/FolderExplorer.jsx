import React, { useState } from 'react';
import { FaFolder, FaFileAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FolderExplorer = ({ folders, files, navigateToFolder }) => {
  const [expandedFolders, setExpandedFolders] = useState({}); // Pour gérer l'ouverture des dossiers

  // Fonction pour basculer l'ouverture/fermeture des dossiers
  const toggleFolder = (folderName) => {
    setExpandedFolders((prevState) => ({
      ...prevState,
      [folderName]: !prevState[folderName],
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Liste des dossiers</h2>

      {/* Affichage des dossiers avec sous-dossiers */}
      <ul className="space-y-4">
        {folders.map((folder, index) => (
          <li key={index} className="cursor-pointer">
            <div
              className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition duration-200"
              onClick={() => toggleFolder(folder)}
            >
              <FaFolder className="text-yellow-500 text-3xl" />
              <span className="text-lg font-semibold">{folder}</span>
              {expandedFolders[folder] ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {/* Affichage des fichiers du dossier */}
            {expandedFolders[folder] && (
              <ul className="ml-8 mt-2 space-y-2">
                {files.map((file, index) => (
                  <li key={index} className="flex items-center space-x-3 p-2 bg-blue-50 rounded-lg shadow-md">
                    <FaFileAlt className="text-blue-500 text-2xl" />
                    <span>{file}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FolderExplorer;
