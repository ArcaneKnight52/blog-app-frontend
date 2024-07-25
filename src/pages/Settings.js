import React from 'react';

const Settings = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">General Settings</h2>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="notifications" className="mr-2" />
          <label htmlFor="notifications" className="text-lg">Enable Notifications</label>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="dark-mode" className="mr-2" />
          <label htmlFor="dark-mode" className="text-lg">Dark Mode</label>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded">Save Settings</button>
      </div>
    </div>
  );
};

export default Settings;
