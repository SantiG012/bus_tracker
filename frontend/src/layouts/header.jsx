// Header.js
import './styles.css';
import React, { useEffect } from "react";
import { isAuthenticated, logout } from "../api/usersApi";
import { useNavigate, useLocation, Link } from 'react-router-dom';

export const Header = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const authenticated = isAuthenticated();

  useEffect(() => {
    if (!authenticated && location.pathname !== '/dashboard' && location.pathname !== '/login') {
      navigate('/dashboard');
    }
  }, [authenticated, location.pathname, navigate]);

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
    navigate('/login');
  };

  return (
    <header className="dashboard-header">
      <Link className="app-name" to="/"><h1>Bus Tracker</h1></Link>
      {authenticated && (
        <nav className="dashboard-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/routes">Routes</Link></li>
            <li><Link to="/buses">Buses</Link></li>
            <li><Link to="/stations">Stations</Link></li>
            <li><Link to="/login" onClick={handleLogout}>Salir</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};
