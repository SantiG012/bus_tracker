import React, { useState , useEffect } from "react";

import styles from "./busForm.module.css"

const BusForm = ({ busData, onSubmit }) =>{
  const [bus, setBus] = useState(busData);
  useEffect(()=>{
    if(busData){
      setBus(busData);
    }
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
      <p className={styles.busFormTitle}>Create or edit a bus</p>
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
          <input type="number" step="any" name="current_latitudine" value={bus.current_latitudine} readOnly />
        </div>

        <div className={styles.busFormGroup}>
          <label>Longitudine</label>
          <input type="number" step="any" name="current_longitudine" value={bus.current_longitudine} readOnly />
        </div>
        
        <div className={styles.busFormGroup}>
          {busData && <button type="submit">Update</button>}
          {!busData && <button type="submit">Save</button>}
        </div>

      </div>
    </form>
  );

}

export default BusForm;