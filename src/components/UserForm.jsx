import React, { useState } from 'react';

const UserForm = ({ onAddUser }) => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('Lecture seule');
  const [password, setPassword] = useState(''); // Nouveau state pour le mot de passe

  const handleAddUser = () => {
    if (username && password) {
      onAddUser({ username, role, password });
      setUsername('');
      setRole('Lecture seule');
      setPassword(''); // Réinitialiser le champ mot de passe
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <input 
        type="text" 
        placeholder="Nom de l'utilisateur"
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        className="border border-gray-300 p-2 rounded" 
      />
      <select 
        value={role} 
        onChange={(e) => setRole(e.target.value)} 
        className="border border-gray-300 p-2 rounded"
      >
        <option value="Lecture seule">Lecture</option>
        <option value="Lecture/Écriture">Lecture/Écriture</option>
      </select>
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 p-2 rounded"
      />
      <button 
        className="bg-green-500 text-white px-4 py-2 rounded mt-2 self-end"
        onClick={handleAddUser}
      >
        Ajouter un utilisateur
      </button>
    </div>
  );
};

export default UserForm;
