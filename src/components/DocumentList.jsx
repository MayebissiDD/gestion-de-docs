import React from "react";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai"; // Icônes pour télécharger et voir

const DocumentList = ({ documents }) => {
  // Fonction pour télécharger un fichier
  const handleDownloadDocument = (doc) => {
    const url = `/path/to/api/files/${doc.id}`;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', doc.name); // Utilise le nom du fichier
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Nettoie le DOM après
  };

  // Fonction pour afficher un fichier
  const handleViewDocument = (doc) => {
    const url = `/path/to/api/files/${doc.id}`;
    window.open(url, '_blank'); // Ouvre le fichier dans un nouvel onglet
  };

  // Fonction pour vérifier si le fichier peut être affiché directement
  const isViewable = (type) => {
    const viewableTypes = ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt'];
    return viewableTypes.includes(type.toLowerCase());
  };

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr className="w-full bg-gray-100">
          <th className="p-4 text-left">Nom du Document</th>
          <th className="p-4 text-left">Type</th>
          <th className="p-4 text-left">Date</th>
          <th className="p-4 text-left">Destinataire</th>
          <th className="p-4 text-left">Statut</th>
          <th className="p-4 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {documents.map((doc, index) => (
          <tr key={index} className="border-t">
            <td className="p-4">{doc.name}</td>
            <td className="p-4">{doc.type}</td>
            <td className="p-4">{doc.date}</td>
            <td className="p-4">{doc.recipient}</td>
            <td className="p-4">{doc.status}</td>
            <td className="p-4 flex items-center space-x-2">
              {/* Bouton Télécharger */}
              <button className="text-green-500 hover:text-green-700" onClick={() => handleDownloadDocument(doc)}>
                <AiOutlineDownload /> {/* Icône de téléchargement */}
              </button>

              {/* Bouton Voir */}
              {isViewable(doc.type) && (
                <button className="text-blue-500 hover:text-blue-700" onClick={() => handleViewDocument(doc)}>
                  <AiOutlineEye /> {/* Icône pour voir le document */}
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Définir une valeur par défaut pour la prop documents
DocumentList.defaultProps = {
  documents: [],
};

export default DocumentList;
