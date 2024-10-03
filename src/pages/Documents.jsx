import React from 'react';
import DocumentList from '../components/DocumentList';
import DocumentSearch from '../components/DocumentSearch';

const Documents = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gestion des Documents</h1>
      {/* Barre de recherche */}
      <DocumentSearch />
      {/* Liste des documents */}
      <div className="mt-4">
        <DocumentList />
      </div>
    </div>
  );
};

export default Documents;
