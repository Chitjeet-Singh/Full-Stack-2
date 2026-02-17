import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';

// Lazy load the page components
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));

function App(){
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        <Link to="/settings" className="nav-link">Settings</Link>
      </nav>
      <div className="main-content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;