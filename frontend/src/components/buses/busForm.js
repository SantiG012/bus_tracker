import React, { useState , useEffect } from "react";

const BusForm = ({ busData, onSubmit }) =>{
  const [bus, setBus] = useState({
    plate:'',
    status:'',
    current_latitudine:"",
    current_longitudine:""
  });
  useEffect(()=>{
    if(busData){
      setBus(busData);
    }
  }, [busData]);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setBus({
      ...busData,
      [name]: value
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    onSubmit(bus);
  };

  return (
    <form onSubmit={handleSubmit} className="busForm">
      <p className="busFormMessage">Create or edit a bus</p>
      <div className="busFormBody">

        <div className="busFormGroup">
          <label>Plate</label>
          <input type="text" name="plate" value={bus.plate} onChange={handleChange} required />
        </div>

        <div className="busFormGroup">
          <label>Status</label>
          <input type="text" name="status" value={bus.status} onChange={handleChange} required />
        </div>

        <div className="busFormGroup">
          <label>Latitudine</label>
          <input type="number" step="any" name="current_latitudine" value={bus.current_latitudine} readOnly />
        </div>

        <div className="busFormGroup">
          <label>Longitudine</label>
          <input type="number" step="any" name="current_longitudine" value={bus.current_longitudine} readOnly />
        </div>

      </div>
      {busData && <button type="submit">Update</button>}
      {!busData && <button type="submit">Save</button>}
    </form>
  );

}

export default BusForm;