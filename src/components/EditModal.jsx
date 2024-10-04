import React, { useState } from 'react';

const EditModal = ({ isOpen, onClose, user, onEditUser }) => {
  const [newName, setNewName] = useState(user ? user.username : ''); // Correction du nom
  const [newRole, setNewRole] = useState(user ? user.role : '');
  const [newPassword, setNewPassword] = useState(''); // Ajout de modification de mot de passe

  if (!isOpen || !user) return null;

  const handleSave = () => {
    onEditUser({ ...user, username: newName, role: newRole, password: newPassword });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Modifier {user.username}</h2> {/* Correction */}
        <input 
          type="text" 
          value={newName}
          onChange={(e) => setNewName(e.target.value)} 
          className="border border-gray-300 p-2 rounded mb-4"
        />
        <select 
          value={newRole} 
          onChange={(e) => setNewRole(e.target.value)} 
          className="border border-gray-300 p-2 rounded"
        >
          <option value="Lecture seule">Lecture</option>
          <option value="Lecture/Écriture">Lecture/Écriture</option>
        </select>
        <input
          type="password"
          placeholder="Nouveau mot de passe"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded mt-4"
        />
        <div className="mt-4 flex justify-end space-x-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
            Annuler
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSave}>
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
