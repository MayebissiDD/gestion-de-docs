import React, { useState } from 'react';

const DocumentSearch = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(`Recherche de: ${query}`);
    // Implémentation de la recherche ici
  };

  return (
    <div className="mt-4">
      <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher un document" 
        className="border p-2 w-full"
      />
      <button 
        onClick={handleSearch} 
        className="bg-blue-600 text-white p-2 mt-2 rounded w-full"
      >
        Rechercher
      </button>
    </div>
  );
};

export default DocumentSearch;
