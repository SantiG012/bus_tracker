import React from "react";
import styles from "./stopCard.module.css";

const StopCard = ({ stop, onEdit, onDelete }) => {
    return (
        <div className={styles.stopCard}>
            <h3>{stop.name}</h3>
            <p>Location: ({stop.latitude},{stop.longitude})</p>
            <p>Status: {stop.status}</p>

            <div className={styles.stopCardButtons}>
                <button onClick={() => onEdit(stop)}>Edit</button>
                <button onClick={() => onDelete(stop)}>Delete</button>
            </div>
        </div>
    );
}

export default StopCard;