import React from "react";
import commonStyles from "src/common/common.module.css";

const RouteStopCard = ({ routeStop, onEdit, onDelete }) => {
    return (
        <div className={commonStyles.genericCard}>
            <h3>Route Stop</h3>
            <p>Order: {routeStop.order}</p>
            <p>Route: {routeStop.route_name}</p>
            <p>Stop: {routeStop.stop_name}</p>
            <p>Status: {routeStop.status}</p>

            <div className={commonStyles.genericUpdateCreateButtonsContainer}>
                <button onClick={() => onEdit(routeStop)}>Edit</button>
                <button onClick={() => onDelete(routeStop)}>Delete</button>
            </div>
        </div>
    );
}

export default RouteStopCard;