import { useEffect, useState } from 'react';

function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="page-container">
      <h1>Dashboard</h1>
      <p>Welcome to your personal dashboard</p>
      <div className="card">
        <h3>Quick Stats</h3>
        <p>Monitor your activity and performance metrics</p>
      </div>
    </div>
  );
}

export default Dashboard;
