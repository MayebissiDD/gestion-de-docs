import React, { useState } from 'react';
import FileDropZone from './FileDropZone';
import FilePreviewList from './FilePreviewList';
import DirectorySelector from './DirectorySelector';

const UploadForm = ({ onFilePreview, onAddNotification }) => {
  const [files, setFiles] = useState([]);
  const [selectedDirectory, setSelectedDirectory] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleFilesAdded = (newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleFileRemove = (fileToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  };

  const handleUpload = () => {
    if (selectedDirectory && selectedRecipient && files.length > 0) {
      setIsUploading(true);

      // Simuler l'upload
      setTimeout(() => {
        setIsUploading(false);
        console.log("Fichiers uploadés :", files);
        console.log("Répertoire sélectionné :", selectedDirectory);
        console.log("Destinataire :", selectedRecipient);

        // Ajouter une notification de succès après upload
        onAddNotification({
          message: `${files.length} fichier(s) ont été téléversé(s) dans ${selectedDirectory} pour ${selectedRecipient}`,
          type: "fichier",
          date: new Date().toISOString().split('T')[0],
        });

        setFiles([]); // Réinitialiser après upload
      }, 1000);
    } else {
      alert("Veuillez sélectionner un répertoire, un destinataire, et ajouter des fichiers !");
    }
  };

  return (
    <div className="mt-4">
      {/* Sélection du répertoire et du destinataire */}
      <DirectorySelector
        onSelectDirectory={setSelectedDirectory}
        onSelectRecipient={setSelectedRecipient}
      />

      {/* Zone de drop pour les fichiers */}
      <FileDropZone onFilesAdded={handleFilesAdded} />

      {/* Prévisualisation et liste des fichiers */}
      <FilePreviewList
        files={files}
        onFileRemove={handleFileRemove}
        onFileClick={onFilePreview} // Quand un fichier est cliqué, on passe le fichier sélectionné
      />

      {/* Bouton de téléversement */}
      <button
        className={`bg-blue-600 text-white p-2 mt-4 rounded w-full ${isUploading ? "opacity-50" : ""}`}
        onClick={handleUpload}
        disabled={isUploading}
      >
        {isUploading ? "Téléversement en cours..." : `Téléverser ${files.length} fichier(s)`}
      </button>
    </div>
  );
};

export default UploadForm;
