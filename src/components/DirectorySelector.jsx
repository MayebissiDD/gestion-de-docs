import React, { useState, useEffect } from 'react';

const DirectorySelector = ({ onSelectDirectory, onSelectRecipient }) => {
  const [directories, setDirectories] = useState([]);
  const [selectedDirectory, setSelectedDirectory] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState('');

  useEffect(() => {
    // Simuler un appel API pour récupérer les répertoires existants
    const fetchDirectories = async () => {
      const directoryData = ['Contrats', 'Rapports', 'Images', 'Projets'];
      setDirectories(directoryData);
    };

    // Simuler un appel API pour récupérer la liste des destinataires
    const fetchRecipients = async () => {
      const recipientData = ['Jean Dupont', 'Eric Martin', 'Marie Leclerc', 'Sophie Dubois'];
      setRecipients(recipientData);
    };

    fetchDirectories();
    fetchRecipients();
  }, []);

  const handleDirectoryChange = (event) => {
    const selected = event.target.value;
    setSelectedDirectory(selected);
    onSelectDirectory(selected);
  };

  const handleRecipientChange = (event) => {
    const selected = event.target.value;
    setSelectedRecipient(selected);
    onSelectRecipient(selected);
  };

  return (
    <div className="mt-4">
      {/* Sélection du répertoire */}
      <div className="mb-4">
        <label htmlFor="directory" className="block font-bold mb-2">
          Sélectionner un répertoire :
        </label>
        <select
          id="directory"
          className="border p-2 rounded w-full"
          value={selectedDirectory}
          onChange={handleDirectoryChange}
        >
          <option value="">Choisir un répertoire</option>
          {directories.map((dir, index) => (
            <option key={index} value={dir}>
              {dir}
            </option>
          ))}
        </select>
      </div>

      {/* Sélection du destinataire */}
      <div>
        <label htmlFor="recipient" className="block font-bold mb-2">
          Sélectionner un destinataire :
        </label>
        <select
          id="recipient"
          className="border p-2 rounded w-full"
          value={selectedRecipient}
          onChange={handleRecipientChange}
        >
          <option value="">Choisir un destinataire</option>
          {recipients.map((recipient, index) => (
            <option key={index} value={recipient}>
              {recipient}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DirectorySelector;
