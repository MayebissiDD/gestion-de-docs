import React, { useState } from "react";
import DocumentSearch from "./../components/DocumentSearch";
import DocumentList from "./../components/DocumentList";

const Documents = () => {
  const [documents, setDocuments] = useState([
    { name: "Image.png", type: "Image", date: "2024-09-19", recipient: "Eric MAB", status: "Terminé" },
    { name: "Présentation.pptx", type: "PowerPoint", date: "2024-09-20", recipient: "Derre M", status: "En attente" },
    { name: "Rapport.docx", type: "Word", date: "2024-09-22", recipient: "Eric ABA", status: "En cours" },
    { name: "Contrat.pdf", type: "PDF", date: "2024-09-24", recipient: "Eric ABA", status: "Archivé" },
  ]);

  const handleCreateDocument = (type) => {
    // Fonction pour créer un nouveau document (Word, Excel, etc.)
    alert(`Création d'un nouveau document ${type}...`);
  };

  const handleShareDocument = (doc) => {
    // Fonction pour partager le document
    alert(`Partage de ${doc.name} via Bluetooth, email, ou WhatsApp...`);
  };

  const handleAddTemplate = () => {
    // Fonction pour ajouter un nouveau modèle
    alert("Téléversement d'un nouveau modèle...");
  };

  return (
    <div className="p-6">
      {/* Composant des boutons d'action */}
      <DocumentSearch handleCreateDocument={handleCreateDocument} handleAddTemplate={handleAddTemplate} />
      
      {/* Composant de la liste des documents */}
      <DocumentList documents={documents} handleShareDocument={handleShareDocument} />
    </div>
  );
};

export default Documents;
