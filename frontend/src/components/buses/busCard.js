import React from "react";
import styles from './busCard.module.css'

const BusCard = ({a_bus, onEdit, onDelete}) => {
  return (
    <div className={styles.busCard}>
      <div>
        <h3> {a_bus.plate} </h3> <p>{a_bus.status} ({a_bus.current_latitude}, {a_bus.current_longitude})</p>
      </div>
      <hr/>

      <div className={styles.busCardButtons}>
        <button onClick={()=>onEdit(a_bus)}>Editar</button>
        <button onClick={()=>onDelete(a_bus)}>Desactivar</button>
      </div>
    </div>
  );
};

export default BusCard;