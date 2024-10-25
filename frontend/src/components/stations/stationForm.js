import React, { useState , useEffect } from "react";
import styles from "./stationForm.module.css"

const StationForm = ({ stationData, onSubmit }) =>{
  const [station, setstation] = useState(stationData);
  useEffect(()=>{
    if(stationData){
      setstation(stationData);
    }
    console.log("stationData ", stationData)
  }, [stationData]);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setstation({
      ...station,
      [name]: value
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    onSubmit(station);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.stationForm}>

      <div className={styles.stationFormBody}>

        <div className={styles.stationFormGroup}>
          <label>Name</label>
          <input type="text" name="name" value={station.name} onChange={handleChange} required />
        </div>

        <div className={styles.stationFormGroup}>
          <label>Latitude</label>
          <input type="number" step="any" name="latitude" value={station.latitude} onChange={handleChange} required />
        </div>

        <div className={styles.stationFormGroup}>
          <label>Longitude</label>
          <input type="number" step="any" name="longitude" value={station.longitude} onChange={handleChange} required />
        </div>
        
        <div className={styles.stationFormGroup}>
          {!stationData.name && <button  type="submit">Save</button>}
          {stationData.name && <button type="submit">Update</button>}
        </div>

      </div>
    </form>
  );

}

export default StationForm;