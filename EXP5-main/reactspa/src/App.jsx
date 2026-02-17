import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Dashboard = lazy(() => import('./Components/Dashboard'));

export default function App() {
  return (
    <Router>
      <nav className="top-nav">
        <Link to="/">Dashboard</Link>
      </nav>
      <div className="main-content">
        <Suspense fallback={<h1>Loading…</h1>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}