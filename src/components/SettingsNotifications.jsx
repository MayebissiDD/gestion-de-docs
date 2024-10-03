import React, { useState } from 'react';

const SettingsNotifications = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleEmailChange = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handleSmsChange = () => {
    setSmsNotifications(!smsNotifications);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      <label className="flex items-center mb-4">
        <input 
          type="checkbox" 
          checked={emailNotifications}
          onChange={handleEmailChange}
          className="mr-2"
        />
        Notifications par email
      </label>

      <label className="flex items-center mb-4">
        <input 
          type="checkbox" 
          checked={smsNotifications}
          onChange={handleSmsChange}
          className="mr-2"
        />
        Notifications par SMS
      </label>
    </div>
  );
};

export default SettingsNotifications;
