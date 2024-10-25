import React from "react";
import './routesCard.module.css'

const RoutesCard = ({a_route, onEdit, onDelete}) => {
  return (
    <div className="stationCard">
      <div>
        <h3> {a_route.name} </h3> <p>{a_route.name} {a_route.description}</p>
      </div>
      <hr/>
      <div className="stationCardButtons">
        <button onClick={()=>onEdit(a_route)}>Editar</button>
        <button onClick={()=>onDelete(a_route)}>Desactivar</button>
      </div>
    </div>
  );
};

export default RoutesCard;