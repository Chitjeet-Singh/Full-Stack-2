import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';

function Dashboard(){
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

function Profile(){
  return (
    <div className="page-container">
      <h1>👤 Profile</h1>
      <p>Your professional profile</p>
      <div className="card">
        <h3>M.Devasis</h3>
        <p>Full Stack Developer | Tech Enthusiast</p>
        <p>Building amazing web experiences</p>
      </div>
    </div>
  );
}

function Settings(){
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

function App(){
  return (
    <Router>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;