import React from 'react';
import SettingsForm from '../components/SettingsForm';
import SettingsNotifications from '../components/SettingsNotifications';
import SettingsDisplay from '../components/SettingsDisplay';

const Settings = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Paramètres</h1>
      
      {/* Section des préférences utilisateur */}
      <div className="mb-6">
        <SettingsForm />
      </div>

      {/* Section des notifications */}
      <div className="mb-6">
        <SettingsNotifications />
      </div>

      {/* Section des paramètres d'affichage */}
      <div className="mb-6">
        <SettingsDisplay />
      </div>
    </div>
  );
};

export default Settings;
