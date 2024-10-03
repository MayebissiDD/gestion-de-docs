import React, { useState, useEffect } from 'react';

const UserModal = ({ user, onClose, onUpdate, isEditing }) => {
  const [editableUser, setEditableUser] = useState(user);

  useEffect(() => {
    setEditableUser(user); // Remettre à jour l'utilisateur quand il change
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSaveChanges = () => {
    onUpdate(editableUser); // Envoie l'utilisateur modifié pour mise à jour
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{isEditing ? 'Modifier Utilisateur' : 'Détails de l\'utilisateur'}</h2>

        {isEditing ? (
          <div>
            <label className="block mb-2">Nom :</label>
            <input 
              type="text" 
              name="name" 
              value={editableUser.name} 
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-4"
            />

            <label className="block mb-2">Droits :</label>
            <select 
              name="rights" 
              value={editableUser.rights} 
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-4"
            >
              <option value="Lecture seule">Lecture seule</option>
              <option value="Lecture/Écriture">Lecture/Écriture</option>
            </select>

            <button 
              onClick={handleSaveChanges}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Enregistrer
            </button>
          </div>
        ) : (
          <div>
            <p><strong>Nom :</strong> {user.name}</p>
            <p><strong>Droits :</strong> {user.rights}</p>
            <p><strong>Statut :</strong> {user.status === 'online' ? 'En ligne' : 'Hors ligne'}</p>
          </div>
        )}

        <button 
          onClick={onClose} 
          className="bg-gray-800 text-white px-4 py-2 mt-4 rounded"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default UserModal;
