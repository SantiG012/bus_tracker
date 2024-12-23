import React, { useState , useEffect } from "react";
import styles from "./busForm.module.css"

const BusForm = ({ busData, onSubmit }) =>{
  const [bus, setBus] = useState(busData);
  useEffect(()=>{
    if(busData){
      setBus(busData);
    }
    console.log("busData ", busData)
  }, [busData]);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setBus({
      ...bus,
      [name]: value
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    onSubmit(bus);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.busForm}>

      <div className={styles.busFormBody}>

        <div className={styles.busFormGroup}>
          <label>Plate</label>
          <input type="text" name="plate" value={bus.plate} onChange={handleChange} required />
        </div>

        <div className={styles.busFormGroup}>
          <label>Status</label>
          <input type="text" name="status" value={bus.status} onChange={handleChange} required />
        </div>

        <div className={styles.busFormGroup}>
          <label>Latitudine</label>
          <input type="number" step="any" name="current_latitudine" value={bus.current_latitude} readOnly />
        </div>

        <div className={styles.busFormGroup}>
          <label>Longitudine</label>
          <input type="number" step="any" name="current_longitudine" value={bus.current_longitude} readOnly />
        </div>
        
        <div className={styles.busFormGroup}>
          {!busData.plate && <button  type="submit">Save</button>}
          {busData.plate && <button type="submit">Update</button>}
        </div>

      </div>
    </form>
  );

}

export default BusForm;