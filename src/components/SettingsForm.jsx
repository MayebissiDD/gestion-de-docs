import React, { useState } from 'react';

const SettingsForm = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Préférences utilisateur</h2>
      <label className="block mb-2">Thème :</label>
      <select 
        value={theme}
        onChange={handleThemeChange}
        className="border p-2 w-full rounded"
      >
        <option value="light">Clair</option>
        <option value="dark">Sombre</option>
      </select>
    </div>
  );
};

export default SettingsForm;
