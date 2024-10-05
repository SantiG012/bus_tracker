import React, { useState, useEffect } from "react";
import { fetchBuses, createBus, updateBus, deleteBus } from "src/api/busApi";
import BusCard from "src/components/buses/busCard";
import BusForm from "src/components/buses/busForm";

const BusListPage = () =>{
   const [buses, setBuses] = useState([]);
   const [selected, setBus] = useState(null);
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
    }else{
      await createBus(a_bus); 
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
    <div>
      {/* Formulario */}
      <BusForm busData={selected} onSubmit={createOrUpdate}/>
      {/* lista de buses */}
      <div className="bus-list">
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