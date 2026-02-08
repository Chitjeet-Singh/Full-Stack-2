import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';

function Profile(){
  return (
    <div className="page-container">
      <marquee loop="5" className="welcome-marquee">
        ✨ Welcome to my Profile ✨
      </marquee>
      <h1>Chitjeet Singh</h1>
      <h2>Full Stack Developer and Data Analyst</h2>
      <div className="profile-bio">
        <p>Passionate about creating beautiful and functional web applications</p>
      </div>
    </div>
  );
}

function Dashboard(){
  return (
    <div className="page-container">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard</p>
      <div className="dashboard-content">
        <p>Track your progress and manage your projects here</p>
      </div>
    </div>
  );
}

function App(){
  return (
    <Router>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;