import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { name: 'Alice Dupont', role: 'Lecture/Écriture', status: 'online' },
    { name: 'Bob Martin', role: 'Lecture seule', status: 'offline' }
  ]);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (userToDelete) => {
    setUsers(users.filter(user => user !== userToDelete));
  };

  return (
    <div className="p-4">
      <UserForm onAddUser={handleAddUser} />
      <UserList users={users} onDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default UserManagement;
