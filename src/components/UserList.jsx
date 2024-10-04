import React, { useState } from 'react';
import { FaInfoCircle, FaEdit, FaTrash } from 'react-icons/fa';
import DeleteModal from './DeleteModal';
import InfoModal from './InfoModal';
import EditModal from './EditModal';

const UserList = ({ users, onDeleteUser, onEditUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const handleInfoClick = (user) => {
    setSelectedUser(user);
    setIsInfoModalOpen(true);
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDeleteUser(selectedUser);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="mt-4">
    
      <div className="overflow-auto max-h-96"> {/* Barre de défilement */}
        <table className="min-w-full bg-white text-left">
          <thead>
            <tr>
              <th className="py-2 px-4">#</th> {/* Numéros d'utilisateur */}
              <th className="py-2 px-4">Nom</th>
              <th className="py-2 px-4">Droits</th>
              <th className="py-2 px-4">Statut</th>
              <th className="py-2 px-4">Mot de passe</th> {/* Nouveau champ pour le mot de passe */}
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{index + 1}</td> {/* Numéros */}
                <td className="py-2 px-4">{user.username}</td> {/* Correction de 'name' en 'username' */}
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">{user.status === 'online' ? 'En ligne' : 'Hors ligne'}</td>
                <td className="py-2 px-4">{user.password ? '********' : 'Non défini'}</td> {/* Afficher le mot de passe */}
                <td className="py-2 px-4 flex space-x-3">
                  <FaInfoCircle className="text-blue-500 cursor-pointer" onClick={() => handleInfoClick(user)} />
                  <FaEdit className="text-yellow-500 cursor-pointer" onClick={() => handleEditClick(user)} />
                  <FaTrash className="text-red-500 cursor-pointer" onClick={() => handleDeleteClick(user)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DeleteModal 
        isOpen={isDeleteModalOpen} 
        onClose={() => setIsDeleteModalOpen(false)} 
        onConfirm={handleConfirmDelete} 
      />
      
      <InfoModal 
        isOpen={isInfoModalOpen} 
        onClose={() => setIsInfoModalOpen(false)} 
        user={selectedUser}
      />

      <EditModal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        user={selectedUser} 
        onEditUser={onEditUser}
      />
    </div>
  );
};

export default UserList;
