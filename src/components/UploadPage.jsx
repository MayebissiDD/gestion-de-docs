import React, { useContext } from 'react';
import UploadForm from './UploadForm';
import { NotificationContext } from '../NotificationContext';

const UploadPage = () => {
  const { addNotification } = useContext(NotificationContext);

  const handleFileUploaded = (files, directory) => {
    addNotification({
      message: `${files.length} fichier(s) ont été téléversé(s) dans ${directory}`,
      type: "fichier",
      date: new Date().toISOString().split('T')[0],
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Importer des fichiers</h1>
      <UploadForm onFileUploaded={handleFileUploaded} />
    </div>
  );
};

export default UploadPage;
