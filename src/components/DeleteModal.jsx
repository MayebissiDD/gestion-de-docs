import React from 'react';

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Confirmer la suppression</h2>
        <p>Êtes-vous sûr de vouloir supprimer cet utilisateur ?</p>
        <div className="mt-4 flex justify-end space-x-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
            Annuler
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onConfirm}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
