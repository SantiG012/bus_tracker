import React, { useState, useEffect } from "react";
import { fetchBuses, createBus, updateBus, deleteBus } from "../../api/busApi";
import BusCard from "../../components/buses/busCard";
import BusForm from "../../components/buses/busForm";

import styles from './busListPage.module.css'
import './styles.css'

import { Header } from '../../layouts/header';
import { Footer } from '../../layouts/footer';

const BusPage = () =>{
  const empty = {
    plate:"",
    status:"",
    current_latitudine:"0",
    current_longitudine:"0"
  }
  const [buses, setBuses] = useState([]);
  const [selected, setBus] = useState(empty);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(()=>{
  const getBuses = async () =>{
    const data = await fetchBuses();
    setBuses(data.sort((a,b)=> a.id > b.id? 1 : -1 ));
  };
  getBuses();
  }, []);

  const createOrUpdate = async (a_bus) =>{
    if(isEditing){
      await updateBus(selected.id, a_bus); 
      setBus(empty)
      const data = await fetchBuses();
      setBuses(data.sort((a,b)=> a.id > b.id? 1 : -1 ));
    }else{
      await createBus(a_bus); 
      setBus(empty)
      const data = await fetchBuses();
      setBuses(data.sort((a,b)=> a.id > b.id? 1 : -1 ));
    }
  }

  const handleEdit = (a_bus) =>{
    setBus(a_bus)
    setIsEditing(true)
  }

  const handleDelete  = async (a_bus) =>{
    await deleteBus(a_bus.id); 
    const data = await fetchBuses();
    setBuses(data.sort((a,b)=> a.id > b.id? 1 : -1 ));
  }

  return (
    <div className="dashboard-container">
      <Header/>
      <main className="dashboard-main">
        <section id="routes" className="dashboard-section">
          <h2>Gestión de buses</h2>
          <div className={styles.busListContainer}> {/* Formulario */} <div className={styles.busListChild}>
              <BusForm busData={selected} onSubmit={createOrUpdate} />
            </div> {/* lista de buses */} <div className={styles.busListChild} style={{overflow:"scroll", height:"80vh"}}> {buses.map((a_bus)=>(
              <BusCard key={a_bus.id} a_bus={a_bus} onEdit={handleEdit} onDelete={handleDelete} /> ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
};

export default BusPage;