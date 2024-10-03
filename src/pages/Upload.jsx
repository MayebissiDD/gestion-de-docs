import React, { useState } from 'react';
import UploadForm from '../components/UploadForm';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null); // Fichier sélectionné pour prévisualisation

  // Fonction pour mettre à jour le fichier sélectionné depuis FilePreviewList
  const handleFilePreview = (file) => {
    setSelectedFile(file);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Importer des documents</h1>

      <div className="flex space-x-6">
        {/* Partie gauche: Gestion des fichiers */}
        <div className="w-1/2">
          <UploadForm onFilePreview={handleFilePreview} />
        </div>

        {/* Partie droite: Prévisualisation des fichiers */}
        <div className="w-1/2 bg-gray-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Prévisualisation du fichier</h2>

          {selectedFile ? (
            <div>
              <p className="text-gray-600 mb-2">
                <strong>Nom :</strong> {selectedFile.name}
              </p>
              <div className="preview-container bg-white p-4 border rounded-lg h-80 overflow-auto">
                {/* Affichage de la prévisualisation selon le type de fichier */}
                {selectedFile.type.includes('image') && (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt={selectedFile.name}
                    className="max-w-full h-full object-contain"
                  />
                )}

                {selectedFile.type.includes('pdf') && (
                  <iframe
                    src={URL.createObjectURL(selectedFile)}
                    title={selectedFile.name}
                    className="w-full h-full"
                  />
                )}

                {selectedFile.type.includes('video') && (
                  <video controls className="w-full h-full">
                    <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
                    Votre navigateur ne supporte pas la lecture de cette vidéo.
                  </video>
                )}

                {selectedFile.type.includes('text') && (
                  <iframe
                    src={URL.createObjectURL(selectedFile)}
                    title={selectedFile.name}
                    className="w-full h-full"
                  />
                )}

                {/* Utilisation du viewer Office pour Word, Excel et PowerPoint */}
                {(selectedFile.name.endsWith('.docx') ||
                  selectedFile.name.endsWith('.xlsx') ||
                  selectedFile.name.endsWith('.pptx')) && (
                  <iframe
                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                      URL.createObjectURL(selectedFile)
                    )}`}
                    title={selectedFile.name}
                    className="w-full h-full"
                  />
                )}

                {/* Fallback si le type de fichier n'est pas pris en charge */}
                {!selectedFile.type.includes('image') &&
                  !selectedFile.type.includes('pdf') &&
                  !selectedFile.type.includes('video') &&
                  !selectedFile.type.includes('text') &&
                  !selectedFile.name.endsWith('.docx') &&
                  !selectedFile.name.endsWith('.xlsx') &&
                  !selectedFile.name.endsWith('.pptx') && (
                    <p className="text-gray-500">Prévisualisation non disponible pour ce type de fichier.</p>
                  )}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Aucun fichier sélectionné pour prévisualisation.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
