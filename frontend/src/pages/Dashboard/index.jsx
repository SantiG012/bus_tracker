import React, { useState, useEffect } from "react";
import './styles.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importación de estilos

import L from 'leaflet';
import busIconImg from './location-icon.png'; // Ruta de tu icono

import { Header } from '../../layouts/header';
import { Footer } from '../../layouts/footer';
import { isAuthenticated } from "../../api/usersApi";

import { fetchStations } from "../../api/stationApi";

const Dashboard = () => {

  const busIcon = new L.Icon({
    iconUrl: busIconImg,
    iconSize: [25, 30], // Tamaño del icono
    iconAnchor: [10, 20], // Punto de anclaje para centrar el marcador en la posición
    popupAnchor: [0, -30], // Ubicación del popup respecto al icono
  });

  const position = [3.43722, -76.5225];

  const [stations, setStations] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRoutes, setFilteredRoutes] = useState([]);

  useEffect(()=>{
    const getStations = async () =>{
      const data = await fetchStations();
      setStations(data.sort((a,b)=> a.id > b.id? 1 : -1 ));
    };
    getStations();
  }, []);

  // const positions = stations.map((station) => [station.latitude, station.longitude]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filtrar las rutas en función del texto de búsqueda
    const filtered = routes.filter(route =>
      route.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRoutes(filtered);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Buscando:", searchTerm);
  };

  return (
    <div className="dashboard-container">
      <Header/>
      <main className="dashboard-main">
        <section id="routes" className="dashboard-section">
          <h2>Busca rutas</h2>
          <form className="route-search" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="T31, E31 ..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
            {!isAuthenticated() && <a href='/login'>Acceder</a>}
          </form>
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
            {stations.map((a_station)=>(
              <Marker position={[a_station.latitude, a_station.longitude]} icon={busIcon}>
                <Popup>
                  {a_station.name}, {[a_station.latitude, a_station.longitude]}
                </Popup>
              </Marker>
            ))}
          {/* {positions.length > 1 && <Polyline positions={positions} color="blue" />} */}
          </MapContainer>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Dashboard;
