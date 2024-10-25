
import React, { useState, useEffect } from "react";
import './styles.css'
import { Header } from '../../layouts/header';
import { Footer } from '../../layouts/footer';

import { fetchStations, createStation, updateStation, deleteStation } from "../../api/stationApi";

import StationCard from "../../components/stations/stationCard";
import StationForm from "../../components/stations/stationForm";

const StationPage = () =>{
  const empty = {
    name:"",
    latitude:"",
    longitude:""
  }
  const [stations, setStations] = useState([]);
  const [selected, setStation] = useState(empty);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(()=>{
    const getStation = async () =>{
      const data = await fetchStations();
      setStations(data.sort((a,b)=> a.id > b.id? 1 : -1 ));
    };
    getStation();
  }, []);

  const createOrUpdate = async (a_station) =>{
    if(isEditing){
      await updateStation(selected.id, a_station); 
      setStation(empty)
      const data = await fetchStations();
      setStations(data.sort((a,b)=> a.id > b.id? 1 : -1 ));
    }else{
      await createStation(a_station); 
      setStation(empty)
      const data = await fetchStations();
      setStations(data.sort((a,b)=> a.id > b.id? 1 : -1 ));
    }
  }

  const handleEdit = (a_station) =>{
    setStation(a_station)
    setIsEditing(true)
  }

  const handleDelete  = async (a_station) =>{
    await deleteStation(a_station.id); 
    const data = await fetchStations();
    setStations(data.sort((a,b)=> a.id > b.id? 1 : -1 ));
  }
  return (
    <div className="dashboard-container">
      <Header/>
      <main className="dashboard-main">
      <section id="stations" className="dashboard-section">
          <h2>Gestión de estaciones</h2>
          <div className="stationsListContainer"> {/* Formulario */} 
            <div className="stationsListChild">
              <StationForm stationData={selected} onSubmit={createOrUpdate} />
            </div> {/* lista de buses */} 
            <div className="stationsListChild" style={{overflow:"scroll", height:"80vh"}}> 
              {stations.map((a_station)=>(
                <StationCard key={a_station.id} a_station={a_station} onEdit={handleEdit} onDelete={handleDelete} />   
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default StationPage;