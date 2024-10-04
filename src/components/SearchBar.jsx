import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query); // Appeler la fonction de recherche passée en prop
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Rechercher un fichier ou dossier"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 mt-2 w-full rounded">
        Rechercher
      </button>
    </div>
  );
};

export default SearchBar;
