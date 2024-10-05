import React, { useState, useEffect } from "react";
import { fetchBuses, createBus, updateBus, deleteBus } from "src/api/busApi";
import BusCard from "src/components/buses/busCard";
import BusForm from "src/components/buses/busForm";

import styles from './busListPage.module.css'

const BusListPage = () =>{
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
    setBuses(data);
  };
  getBuses();
  }, []);

  const createOrUpdate = async (a_bus) =>{
    if(isEditing){
      await updateBus(selected.id, a_bus); 
      setBus(empty)
      const data = await fetchBuses();
      setBuses(data.sort());
    }else{
      await createBus(a_bus); 
      setBus(empty)
      const data = await fetchBuses();
      setBuses(data);
    }
  }

  const handleEdit = (a_bus) =>{
    setBus(a_bus)
    setIsEditing(true)
  }

  const handleDelete  = async (a_bus) =>{
    await deleteBus(a_bus.id); 
    const data = await fetchBuses();
    setBuses(data);
  }

  return (
    <div className={styles.busListContainer}>
      {/* Formulario */}
      <div styles={{backgroduColor:"red"}} className={styles.busListChild}>
        <BusForm busData={selected} onSubmit={createOrUpdate}/>
      </div>
      {/* lista de buses */}
      <div className={styles.busListChild} style={{overflow:"scroll", height:"70vh"}}>
        {buses.map((a_bus)=>(
          <BusCard 
            key={a_bus.id}
            a_bus={a_bus}
            onEdit={handleEdit}
            onDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  )
};

export default BusListPage;