import React from "react";
import styles from "./busCard.module.css";

const BusCard = ({ bus, onEdit, onDelete }) => {
    return (
        <div className={styles.busCard}>
            <h3>{bus.plate}</h3>
            <p>Status: {bus.status}</p>
            <p>Location: ({bus.current_latitude},{bus.current_longitude})</p>

            <div className={styles.busCardButtons}>	
                <button onClick={() => onEdit(bus)}>Edit</button>
                <button onClick={() => onDelete(bus)}>Delete</button>
            </div>
        </div>
    );
}

export default BusCard;