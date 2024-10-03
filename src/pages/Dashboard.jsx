import React, { useState } from 'react';
import DashboardStats from '../components/DashboardStats';
import DocumentList from '../components/DocumentList';
import { FaRegBell } from 'react-icons/fa'; // Pour l'icône de notification

const Dashboard = () => {
  // Notifications état
  const [notifications, setNotifications] = useState([
    { message: "Un dossier a été créé au nom de Projet A", type: "dossier", date: "2024-09-30" },
    { message: "5 nouveaux fichiers ont été ajoutés par Jean", type: "fichier", date: "2024-09-29" },
  ]);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(notifications.length);

  // Fonction pour gérer le clic sur la cloche de notification
  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setUnreadCount(0); // Marquer toutes les notifications comme lues
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>
        
        {/* Icône de notification */}
        <div className="relative">
          <button className="relative focus:outline-none" onClick={handleNotificationClick}>
            <FaRegBell className="text-2xl text-gray-600" />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full"></span>
            )}
          </button>

          {/* Modal des notifications */}
          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Notifications</h3>
                {notifications.length > 0 ? (
                  <ul className="space-y-2">
                    {notifications.map((notification, index) => (
                      <li key={index} className="text-sm text-gray-700">
                        {notification.message} <br />
                        <span className="text-gray-500 text-xs">{notification.date}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm">Aucune notification</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Indicateurs du tableau de bord */}
      <DashboardStats />

      {/* Liste des fichiers récents */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Documents récents</h2>
        <DocumentList />
      </div>
    </div>
  );
};

export default Dashboard;
