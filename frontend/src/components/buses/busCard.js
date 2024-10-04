import React from "react";
import styles from './busCard.module.css'

const BusCard = ({a_bus, onEdit, onDelete}) => {
  return (
    <div className={styles.busCard}>
      <h3> {a_bus.plate} </h3>
      <p>Status: {a_bus.status}</p>
      <p>Location: ({a_bus.current_latitudine}, {a_bus.current_longitudine})</p>

      <div className={styles.busCardButtons}>
        <button onClick={()=>onEdit(a_bus)}>Editar</button>
        <button onClick={()=>onDelete(a_bus)}>Desactivar</button>
      </div>
    </div>
  );
};

export default BusCard;