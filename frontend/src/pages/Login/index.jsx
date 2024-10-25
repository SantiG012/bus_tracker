import React, { useState } from 'react';
import './styles.css'

import { authenticate } from "../../api/usersApi";
import { Header } from '../../layouts/header';
import { Footer } from '../../layouts/footer';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    const token = await authenticate({email, password});
    if(token.error){
      setError('Correo o contraseña incorrectos');
      return;
    }
    const {access, refresh, error} = token;
    if (token) {
      localStorage.setItem('authToken', access);
      localStorage.setItem('refreshToken', refresh);
      navigate('/dashboard');
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="dashboard-container">
      <Header/>
      <main className="dashboard-main">
        <section id="routes" className="login-section">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button onClick={handleLogin} className="login-button">Ingresar</button>
          {error && <p className="error-message">{error}</p>}
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default LoginScreen;