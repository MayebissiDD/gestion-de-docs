import React, { useState } from 'react';
import DashboardStats from '../components/DashboardStats';
import DocumentList from '../components/DocumentList';
import { FaRegBell, FaFolder, FaFileAlt } from 'react-icons/fa'; // Icônes pour les notifications

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

  // Fonction pour renvoyer l'icône en fonction du type de notification
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'dossier':
        return <FaFolder className="text-blue-500" />;
      case 'fichier':
        return <FaFileAlt className="text-green-500" />;
      default:
        return <FaFileAlt />;
    }
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
                <h3 className="font-bold text-lg mb-4">Notifications</h3>
                {notifications.length > 0 ? (
                  <ul className="space-y-3">
                    {notifications.map((notification, index) => (
                      <li key={index} className="flex items-start p-2 bg-gray-50 rounded-lg shadow-sm">
                        <div className="mr-3">
                          {/* Icône correspondant au type de notification */}
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 text-sm">{notification.message}</p>
                          <span className="text-gray-500 text-xs">{notification.date}</span>
                        </div>
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
