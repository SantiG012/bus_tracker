import React from "react";
import commonStyles from "src/common/common.module.css";

const RouteCard = ({ route, onEdit, onDelete }) => {
    return (
        <div className={commonStyles.genericCard}>
            <h3>{route.name}</h3>
            <p>Description: {route.description}</p>
            <p>Status: {route.status}</p>

            <div className={commonStyles.genericUpdateCreateButtonsContainer}>
                <button onClick={() => onEdit(route)}>Edit</button>
                <button onClick={() => onDelete(route)}>Delete</button>
            </div>
        </div>
    );
}

export default RouteCard;