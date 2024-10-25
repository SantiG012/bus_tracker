import React from "react";
import './stationCard.module.css'

const StationCard = ({a_station, onEdit, onDelete}) => {
  return (
    <div className="stationCard">
      <div>
        <h3> {a_station.name} </h3> <p>{a_station.status} ({a_station.latitude}, {a_station.longitude})</p>
      </div>
      <hr/>

      <div className="stationCardButtons">
        <button onClick={()=>onEdit(a_station)}>Editar</button>
        <button onClick={()=>onDelete(a_station)}>Desactivar</button>
      </div>
    </div>
  );
};

export default StationCard;