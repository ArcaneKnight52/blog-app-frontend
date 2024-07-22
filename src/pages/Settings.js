import { useState, useEffect } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    theme: 'light',
  });

  useEffect(() => {
    const storedSettings = JSON.parse(localStorage.getItem('settings')) || { theme: 'light' };
    setSettings(storedSettings);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSettings(prevSettings => ({
      ...prevSettings, [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('settings', JSON.stringify(settings));
    alert('Settings saved');
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Settings</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          Theme:
          <select name="theme" value={settings.theme} onChange={handleChange} className="ml-2 p-2 rounded border border-gray-300">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
};

export default Settings;
