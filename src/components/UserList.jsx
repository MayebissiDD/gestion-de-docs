import React, { useState } from 'react';
import UserModal from './UserModal'; // Importation du composant Modal
import { FaInfoCircle, FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importation des icônes

const UserList = ({ users, onDelete, setUsers }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Pour déterminer si l'utilisateur est en mode édition

  const handleUserClick = (user) => {
    setSelectedUser(user); // Ouvre la modal avec les infos de l'utilisateur
    setIsEditing(false); // Affiche les détails, pas en mode édition
  };

  const handleEditUser = (user) => {
    setSelectedUser(user); // Charge l'utilisateur dans la modal
    setIsEditing(true); // Active le mode édition
  };

  const handleCloseModal = () => {
    setSelectedUser(null); // Ferme la modal
    setIsEditing(false); // Désactive le mode édition
  };

  const handleUpdateUser = (updatedUser) => {
    // Mettre à jour l'utilisateur dans la liste
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    handleCloseModal();
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">Nom</th>
            <th className="py-2 px-4">Droits</th>
            <th className="py-2 px-4">Statut</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border">{user.name}</td>
              <td className="py-2 px-4 border">{user.rights}</td>
              <td className={`py-2 px-4 border ${user.status === 'online' ? 'text-green-500' : 'text-red-500'}`}>
                {user.status === 'online' ? 'En ligne' : 'Hors ligne'}
              </td>
              <td className="py-2 px-4 border flex space-x-2">
                <button 
                  onClick={() => handleUserClick(user)}
                  className="bg-blue-500 text-white px-3 py-1 rounded flex items-center"
                >
                  <FaInfoCircle className="mr-1" /> Infos
                </button>
                <button 
                  onClick={() => handleEditUser(user)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded flex items-center"
                >
                  <FaEdit className="mr-1" /> Modifier
                </button>
                <button 
                  onClick={() => onDelete(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded flex items-center"
                >
                  <FaTrashAlt className="mr-1" /> Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal pour afficher ou modifier un utilisateur */}
      {selectedUser && (
        <UserModal 
          user={selectedUser} 
          onClose={handleCloseModal} 
          onUpdate={handleUpdateUser}
          isEditing={isEditing}
        />
      )}
    </div>
  );
};

export default UserList;
