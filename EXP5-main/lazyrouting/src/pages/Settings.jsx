import { useEffect, useState } from 'react';

function Settings() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="page-container">
      <h1>⚙️ Settings</h1>
      <p>Manage your application settings</p>
      <div className="card">
        <h3>Preferences</h3>
        <p>Customize your experience with various options</p>
      </div>
    </div>
  );
}

export default Settings;
