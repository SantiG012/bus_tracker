import React from 'react';
import './styles.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importación de estilos

import { Header } from '../../layouts/header';
import { Footer } from '../../layouts/footer';
import { isAuthenticated } from "../../api/usersApi";

const Dashboard = () => {

  const position = [3.43722, -76.5225];

  return (
    <div className="dashboard-container">
      <Header/>
      <main className="dashboard-main">
        <section id="routes" className="dashboard-section">
          <h2>Busca rutas</h2>
          {/* You can insert a route search component or table */}
          <div className="route-search">
            <input type="text" placeholder="Search for a route..." />
            <button>Search</button>
            {!isAuthenticated() && <a href='/login'>Acceder</a>}
          </div>
        <p>{position}</p>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Bus stop A <br /> Main station.
            </Popup>
          </Marker>
        </MapContainer>
      </section>

      </main>
      <Footer/>
    </div>
  );
};

export default Dashboard;
