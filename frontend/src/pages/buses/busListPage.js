import React, { useState, useEffect } from "react";
import { fetchBuses, updateBus, createBus, deleteBus } from "src/api/busApi";
import BusCard from "src/components/buses/busCard";
import BusForm from "src/components/buses/busForm";
import styles from './busListPage.module.css'


const BusListPage = () => {
    const [buses, setBuses] = useState([]);
    const [selected, setSelected] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const getBuses = async () => {
            const data = await fetchBuses();
            setBuses(data);
        }
        getBuses();

    }, []);

    const createOrUpdate = async (bus) => {
        if (isEditing) {
            await updateBus(selected.id, bus);
            setSelected(null);
        } else {
            await createBus(bus);
        }
        const data = await fetchBuses();
        setBuses(data);
        setIsEditing(false);
    }

    const handleEdit = (bus) => {
        setSelected(bus);
        setIsEditing(true);
    };

    const handleDelete = async (bus) => {
        await deleteBus(bus);
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
            {buses.map((bus)=>(
              <BusCard 
                    key={bus.id}
                    bus={bus}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
              ))}
          </div>
        </div>
      );
};

export default BusListPage;

