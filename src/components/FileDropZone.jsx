import React from 'react';
import { useDropzone } from 'react-dropzone';

const FileDropZone = ({ onFilesAdded }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      onFilesAdded(acceptedFiles);
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`border-dashed border-4 p-6 rounded-lg mt-4 text-center cursor-pointer ${
        isDragActive ? 'border-blue-600' : 'border-gray-400'
      }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-blue-600">Déposez les fichiers ici...</p>
      ) : (
        <p className="text-gray-500">
          Glissez-déposez vos fichiers ici, ou cliquez pour sélectionner des fichiers
        </p>
      )}
    </div>
  );
};

export default FileDropZone;
