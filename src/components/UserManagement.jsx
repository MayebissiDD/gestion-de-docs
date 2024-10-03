import React, { useState } from 'react';
import UserList from './UserList'; // Importation de la liste des utilisateurs
import { FaUserPlus } from 'react-icons/fa'; // Icône pour ajouter un utilisateur

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Dupont', rights: 'Lecture/Écriture', status: 'online' },
    { id: 2, name: 'Bob Martin', rights: 'Lecture seule', status: 'offline' },
  ]);
  const [newUser, setNewUser] = useState({ name: '', rights: 'Lecture seule' });

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId)); // Supprime l'utilisateur par ID
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.name.trim() === '') return; // Vérification simple

    // Ajouter le nouvel utilisateur à la liste
    setUsers([
      ...users,
      { ...newUser, id: users.length + 1, status: 'offline' }, // Ajoute l'utilisateur avec statut 'offline' par défaut
    ]);

    // Réinitialiser le formulaire
    setNewUser({ name: '', rights: 'Lecture seule' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gestion des Utilisateurs</h1>

      {/* Formulaire pour ajouter un nouvel utilisateur */}
      <form onSubmit={handleAddUser} className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700">Nom :</label>
          <input 
            type="text" 
            name="name" 
            value={newUser.name}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            placeholder="Nom de l'utilisateur"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Droits :</label>
          <select 
            name="rights" 
            value={newUser.rights} 
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          >
            <option value="Lecture seule">Lecture seule</option>
            <option value="Lecture/Écriture">Lecture/Écriture</option>
          </select>
        </div>
        <div className="self-end">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
            <FaUserPlus className="mr-2" /> Ajouter
          </button>
        </div>
      </form>

      {/* Affichage de la liste des utilisateurs */}
      <UserList users={users} onDelete={handleDeleteUser} setUsers={setUsers} />
    </div>
  );
};

export default UserManagement;
