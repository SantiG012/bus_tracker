import React, { useState, useEffect } from "react";
import { fetchBuses } from "src/api/busApi";
import BusCard from "src/components/buses/busCard";

const BusListPage = () =>{
   const [buses, setBuses] = useState([]);

   useEffect(()=>{
    const getBuses = async () =>{
      const data = await fetchBuses();
      setBuses(data);
    };
    getBuses();
   }, []);

   return (
    <div>
      {/* lista de buses */}
      <div className="bus-list">
        {buses.map((a_bus)=>(
          <BusCard 
            key={a_bus.id}
            a_bus={a_bus}
            onEdit={()=> console.log("Not implement yet")}
            onDelete={()=> console.log("Not implement yet")}
            />
          ))}
      </div>
    </div>
   )
};

export default BusListPage;