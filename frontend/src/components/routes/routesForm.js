import React, { useState , useEffect } from "react";
import styles from "./routesForm.module.css"

const RoutesForm = ({ busData, onSubmit }) =>{
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

      <div className={styles.busFormBody}>

        <div className={styles.busFormGroup}>
          <label>Name</label>
          <input type="text" name="name" value={bus.name} onChange={handleChange} required />
        </div>

        <div className={styles.busFormGroup}>
          <label>Description</label>
          <textarea rows="7" cols="47" type="text" name="description" value={bus.description} onChange={handleChange} required />
        </div>
        
        <div className={styles.busFormGroup}>
          {!busData.plate && <button  type="submit">Save</button>}
          {busData.plate && <button type="submit">Update</button>}
        </div>

      </div>
    </form>
  );

}

export default RoutesForm;