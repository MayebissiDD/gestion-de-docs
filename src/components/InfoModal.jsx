import React from 'react';

const InfoModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Informations sur {user.name}</h2>
        <p>Droits : {user.role}</p>
        <p>Statut : {user.status === 'online' ? 'En ligne' : 'Hors ligne'}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default InfoModal;
