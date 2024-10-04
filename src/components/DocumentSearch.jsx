import React from "react";
import { FaFileWord, FaFileExcel, FaFilePowerpoint, FaPlus } from "react-icons/fa";

const DocumentSearch = () => {
  // URLs des versions en ligne de Microsoft Office
  const openOnlineApp = (appName) => {
    let url;
    switch (appName) {
      case 'Word':
        url = 'https://office.live.com/start/Word.aspx'; // Word en ligne
        break;
      case 'Excel':
        url = 'https://office.live.com/start/Excel.aspx'; // Excel en ligne
        break;
      case 'PowerPoint':
        url = 'https://office.live.com/start/PowerPoint.aspx'; // PowerPoint en ligne
        break;
      case 'Notepad':
        createAndDownloadTextFile(); // Simuler un fichier Bloc-notes téléchargeable
        return;
      default:
        return;
    }
    window.open(url, '_blank'); // Ouvrir l'application en ligne dans un nouvel onglet
  };

  // Fonction pour créer un fichier texte pour le Bloc-notes
  const createAndDownloadTextFile = () => {
    const element = document.createElement("a");
    const file = new Blob([""], { type: 'text/plain' }); // Fichier vide
    element.href = URL.createObjectURL(file);
    element.download = "nouveau_fichier.txt"; // Nom du fichier téléchargeable
    document.body.appendChild(element); // Ajouter temporairement l'élément au DOM
    element.click(); // Simuler un clic pour télécharger le fichier
    document.body.removeChild(element); // Nettoyer après le téléchargement
  };

  return (
    <div className="flex flex-wrap justify-center space-x-0 sm:space-x-4 w-full mb-4">
      <button className="bg-blue-600 text-white px-4 py-2 m-2 rounded flex items-center" onClick={() => openOnlineApp('Word')}>
        <FaFileWord className="mr-2" /> Nouveau Word
      </button>
      <button className="bg-green-600 text-white px-4 py-2 m-2 rounded flex items-center" onClick={() => openOnlineApp('Excel')}>
        <FaFileExcel className="mr-2" /> Nouveau Excel
      </button>
      <button className="bg-orange-600 text-white px-4 py-2 m-2 rounded flex items-center" onClick={() => openOnlineApp('PowerPoint')}>
        <FaFilePowerpoint className="mr-2" /> Nouveau PowerPoint
      </button>
      <button className="bg-gray-600 text-white px-4 py-2 m-2 rounded flex items-center" onClick={() => openOnlineApp('Notepad')}>
        <FaPlus className="mr-2" /> Nouveau Bloc-notes
      </button>
    </div>
  );
};

export default DocumentSearch;
