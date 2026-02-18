import { useEffect, useState } from 'react';

function Profile() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="page-container">
      <h1>👤 Profile</h1>
      <p>Your professional profile</p>
      <div className="card">
        <h3>Chitjeet Singh</h3>
        <p>Full Stack Developer | Tech Enthusiast</p>
        <p>Building amazing web experiences</p>
      </div>
    </div>
  );
}

export default Profile;
