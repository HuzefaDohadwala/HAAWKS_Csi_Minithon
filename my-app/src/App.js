import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div>
        <div>
            <header className='flex justify-center font-cyberpunk text-2xl font-bold text-yellow-500'>
              <ul className="navigation">
                <li className='hover:border-b hover:border-white'>
                  <Link to="/">HOME</Link>
                </li>

                <li className='hover:border-b hover:border-white'>
                  <Link to="/profile">PROFILE</Link>
                </li>
                <li className='hover:border-b hover:border-white'>
                  <Link to="/dashboard">DASHBOARD</Link>
                </li>
              </ul>
              <div className="hamburger" onClick={toggleMenu}>
                <i className="fas fa-bars on" id="on"></i>
              </div>
              <div className={`alert ${isOpen ? "open" : ""}`}>
                <i className="fas fa-times close" onClick={toggleMenu}></i>
                <ul className="navigation1">
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                </ul>
              </div>
            </header>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
