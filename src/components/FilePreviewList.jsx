import React from 'react';

const FilePreviewList = ({ files, onFileRemove, onFileClick }) => {
  return (
    <div className="mt-4">
      <h3 className="font-bold mb-2">Fichiers sélectionnés ({files.length}) :</h3>
      {files.length === 0 ? (
        <p className="text-gray-500">Aucun fichier sélectionné</p>
      ) : (
        <ul className="list-disc list-inside">
          {files.map((file, index) => (
            <li
              key={index}
              className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
              onClick={() => onFileClick(file)} // Clic sur un fichier pour le prévisualiser
            >
              <span>{file.name}</span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                onClick={(e) => {
                  e.stopPropagation(); // Empêche le clic sur retirer de déclencher la prévisualisation
                  onFileRemove(file);
                }}
              >
                Retirer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilePreviewList;
