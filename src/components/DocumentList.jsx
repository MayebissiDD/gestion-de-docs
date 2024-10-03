import React, { useState } from 'react';
import { FaFilePdf, FaFileWord, FaFilePowerpoint, FaFileImage, FaFileAlt } from 'react-icons/fa';

const DocumentList = () => {
  const initialDocuments = [
    { name: "Contrat.pdf", type: "PDF", date: "2024-09-24", destinataire: "Eric ABA", status: "Archivé" },
    { name: "Rapport.docx", type: "Word", date: "2024-09-22", destinataire: "Eric ABA", status: "En cours" },
    { name: "Présentation.pptx", type: "PowerPoint", date: "2024-09-20", destinataire: "Derre M", status: "En attente" },
    { name: "Image.png", type: "Image", date: "2024-09-19", destinataire: "Eric MAB", status: "Terminé" },
  ];

  const [documents, setDocuments] = useState(initialDocuments);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [sortField, setSortField] = useState("date"); // Par défaut trié par date
  const [sortDirection, setSortDirection] = useState("asc"); // Par défaut trié ascendant
  const [maxFilesToShow, setMaxFilesToShow] = useState(5); // Par défaut, afficher 5 fichiers

  // Tri des documents
  const sortDocuments = (documents) => {
    return [...documents].sort((a, b) => {
      if (sortField === "destinataire") {
        return sortDirection === "asc"
          ? a.destinataire.localeCompare(b.destinataire)
          : b.destinataire.localeCompare(a.destinataire);
      } else if (sortField === "date") {
        return sortDirection === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
  };

  // Filtrer et trier les documents
  const filteredAndSortedDocuments = sortDocuments(
    documents.filter((doc) => {
      const matchesSearchTerm = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilterType = filterType ? doc.type === filterType : true;
      return matchesSearchTerm && matchesFilterType;
    })
  );

  const getIconForType = (type) => {
    switch (type) {
      case "PDF":
        return <FaFilePdf className="text-red-500 text-xl" />;
      case "Word":
        return <FaFileWord className="text-blue-500 text-xl" />;
      case "PowerPoint":
        return <FaFilePowerpoint className="text-orange-500 text-xl" />;
      case "Image":
        return <FaFileImage className="text-green-500 text-xl" />;
      default:
        return <FaFileAlt className="text-gray-500 text-xl" />;
    }
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div className="p-4">
      {/* Champs de recherche et de filtre */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Rechercher un document"
          className="p-2 border rounded-md w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded-md"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">Filtrer par type</option>
          <option value="PDF">PDF</option>
          <option value="Word">Word</option>
          <option value="PowerPoint">PowerPoint</option>
          <option value="Image">Image</option>
        </select>
      </div>

      {/* Table des documents avec options de tri */}
      <div className="overflow-x-auto max-h-96 overflow-y-scroll">
        <table className="min-w-full bg-white border rounded-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">Nom du Document</th>
              <th className="py-2 px-4 border-b">Type</th>
              <th
                className="py-2 px-4 border-b cursor-pointer"
                onClick={() => handleSort("date")}
              >
                Date {sortField === "date" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
              </th>
              <th
                className="py-2 px-4 border-b cursor-pointer"
                onClick={() => handleSort("destinataire")}
              >
                Destinataire {sortField === "destinataire" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
              </th>
              <th className="py-2 px-4 border-b">Statut</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedDocuments.length > 0 ? (
              filteredAndSortedDocuments.slice(0, maxFilesToShow).map((doc, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b flex items-center space-x-2">
                    {getIconForType(doc.type)}
                    <span>{doc.name}</span>
                  </td>
                  <td className="py-2 px-4 border-b">{doc.type}</td>
                  <td className="py-2 px-4 border-b">{doc.date}</td>
                  <td className="py-2 px-4 border-b">{doc.destinataire}</td>
                  <td className="py-2 px-4 border-b">{doc.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  Aucun document trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Option pour changer le nombre de fichiers à afficher */}
      <div className="mt-4">
        <label className="mr-2">Afficher :</label>
        <select
          className="p-2 border rounded-md"
          value={maxFilesToShow}
          onChange={(e) => setMaxFilesToShow(parseInt(e.target.value))}
        >
          <option value={5}>5 fichiers récents</option>
          <option value={10}>10 fichiers</option>
          <option value={20}>20 fichiers</option>
          <option value={filteredAndSortedDocuments.length}>Tout afficher</option>
        </select>
      </div>
    </div>
  );
};

export default DocumentList;
