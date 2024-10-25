import React, { useState , useEffect } from "react";
import styles from "./routesForm.module.css"

const RoutesForm = ({ routeData, onSubmit, stationData }) =>{
  const [a_routes, setRoutes] = useState(routeData);
  const [stations, setStations] = useState(stationData);
  const [selectedStations, setSelectedStations] = useState([]);
  
  useEffect(()=>{
    if(routeData){
      setRoutes(routeData);
    }
    if(stationData){
      setStations(stationData);
    }
  }, [routeData]);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setRoutes({
      ...a_routes,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...a_routes, stations: selectedStations });
  };

  const handleStationChange = (e) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedStations(value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.busForm}>

      <div className={styles.busFormBody}>

        <div className={styles.busFormGroup}>
          <label>Name</label>
          <input type="text" name="name" value={a_routes.name} onChange={handleChange} required />
        </div>

        <div className={styles.busFormGroup}>
          <label>Description</label>
          <textarea rows="7" cols="47" type="text" name="description" value={a_routes.description} onChange={handleChange} required />
        </div>
        
        <div className={styles.busFormGroup}>
          <label>Estaciones</label>
            <select
              multiple
              value={selectedStations}
              onChange={handleStationChange}
              className={styles.stationSelect}
            >
              {stations.map((station) => (
                <option key={station.id} value={station.id}>
                  {station.name}
                </option>
              ))}
            </select>
        </div>

        <div className={styles.busFormGroup}>
          <button type="submit">{routeData.name ? "Update" : "Save"}</button>
        </div>

      </div>
    </form>
  );

}

export default RoutesForm;