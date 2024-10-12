import axios from 'axios';


export const apiBuses = () => {
  // get all buses
  const getBuses = async () =>{
    return await axios.get("http://localhost:8000/api/buses/");
  }
  // get by id
  const getBusesById = async (a_id) =>{
    return await axios.get(`http://localhost:8000/api/buses/${a_id}`)
  }
  // create
  const createBus = async (data) =>{
    return await Promise.reject(new Error("Not implemented yet"))
  }
  // update
  const updateBus = async (a_id, data) =>{
    return await Promise.reject(new Error("Not implemented yet"))
  }
  // delete
  const deactivateBus = async (a_id) =>{
    return await Promise.reject(new Error("Not implemented yet"))
  }

  return {
    getBuses,
    getBusesById,
    createBus,
    updateBus,
    deactivateBus
  };
}