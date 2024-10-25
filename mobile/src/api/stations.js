import axios from 'axios';


export const apiStations = () => {
  // get all Stations
  const getStations = async () =>{
    return await axios.get("http://10.0.205.84:8000/api/stations/");
  }
  // get by id
  const getStationsById = async (a_id) =>{
    return await axios.get(`http://10.0.205.84:8000/api/stations/${a_id}`)
  }
  // create
  const createStation = async (data) =>{
    return await Promise.reject(new Error("Not implemented yet"))
  }
  // update
  const updateStation = async (a_id, data) =>{
    return await Promise.reject(new Error("Not implemented yet"))
  }
  // delete
  const deactivateStation = async (a_id) =>{
    return await Promise.reject(new Error("Not implemented yet"))
  } 

  return {
    getStations,
    getStationsById,
    createStation,
    updateStation,
    deactivateStation
  };
}