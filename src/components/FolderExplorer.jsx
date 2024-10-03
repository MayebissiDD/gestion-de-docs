import React, { useState } from 'react';

const FolderExplorer = () => {
  const [folders] = useState(['Dossier1', 'Dossier2', 'Dossier3']); // Exemple de dossiers

  return (
    <div>
      <h2 className="text-2xl font-bold">Explorateur de Dossiers</h2>
      <ul>
        {folders.map((folder, index) => (
          <li key={index}>{folder}</li>
        ))}
      </ul>
    </div>
  );
};

export default FolderExplorer;
