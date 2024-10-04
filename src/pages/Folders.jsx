import React, { useState } from 'react';
import FolderExplorer from '../components/FolderExplorer';
import FolderCreation from '../components/FolderCreation';
import Breadcrumb from '../components/Breadcrumb';
import SearchBar from '../components/SearchBar';

const Folders = () => {
  const [currentPath, setCurrentPath] = useState(['Dossiers']); // Chemin actuel
  const [folders, setFolders] = useState(['Contrat', 'Comptabilité', 'Actes']); // Dossiers initiaux
  const [files, setFiles] = useState(['Document1.docx', 'Feuille2.xlsx']); // Fichiers initiaux
  const [searchResults, setSearchResults] = useState([]); // Résultats de recherche

  // Fonction pour naviguer dans les dossiers
  const navigateToFolder = (folderName) => {
    setCurrentPath([...currentPath, folderName]);
  };

  // Fonction pour gérer la recherche
  const handleSearch = (query) => {
    // Logique de recherche (par nom ou date)
    const results = folders.filter((folder) => folder.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <div className="flex h-screen">
      {/* Partie 1 : Explorateur de dossiers et création de dossiers */}
      <div className="w-3/4 p-4 border-r border-gray-300">
        <h1 className="text-3xl font-bold mb-6">Explorateur de dossiers</h1>

        {/* Section 1 : Création de dossier */}
        <FolderCreation />

        {/* Section 2 : Fil d'Ariane */}
        <Breadcrumb path={currentPath} />

        {/* Section 3 : Explorateur de dossiers */}
        <FolderExplorer folders={folders} files={files} navigateToFolder={navigateToFolder} />
      </div>

      {/* Partie 2 : Barre de recherche et résultats */}
      <div className="w-1/4 p-4">
        <SearchBar onSearch={handleSearch} />
        
        {/* Résultats de la recherche */}
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">Résultats de la recherche</h3>
          {searchResults.length > 0 ? (
            <ul className="space-y-2">
              {searchResults.map((result, index) => (
                <li key={index} className="p-2 bg-gray-100 rounded-md">{result}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Aucun résultat trouvé.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Folders;
