import React, { useState } from 'react';

const FolderCreation = () => {
  const [folderName, setFolderName] = useState('');

  const handleCreateFolder = () => {
    if (folderName) {
      alert(`Nouveau dossier créé : ${folderName}`);
      setFolderName(''); // Réinitialiser après création
    } else {
      alert("Veuillez entrer un nom pour le dossier");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Créer un nouveau dossier</h2>
      <input
        type="text"
        placeholder="Nom du dossier"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button onClick={handleCreateFolder} className="bg-green-600 text-white p-2 mt-4 rounded">
        Créer
      </button>
    </div>
  );
};

export default FolderCreation;
