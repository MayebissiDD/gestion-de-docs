import React, { useState } from 'react';

const SettingsDisplay = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleItemsChange = (event) => {
    setItemsPerPage(event.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Paramètres d'affichage</h2>
      <label className="block mb-2">Éléments par page :</label>
      <input 
        type="number" 
        value={itemsPerPage}
        onChange={handleItemsChange}
        className="border p-2 w-full rounded"
      />
    </div>
  );
};

export default SettingsDisplay;
