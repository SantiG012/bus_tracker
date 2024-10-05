import axios from 'axios';

// TODO: create a constants file
const API_URL = "http://localhost:8000/api/buses/";
// get all buses
export const fetchBuses = async () =>{
  try {
    const response = await axios.get(API_URL);
    const {data, status} = response;
    return data
  }catch(error){
    console.log("Error fetching buses", error);
    throw error
  }
}
// get a bus by id
export const fetchBusesById = async (a_id) =>{
  try {
    const response = await axios.get(`${API_URL}/${a_id}`);
    const {data, status} = response;
    return data
  }catch(error){
    console.log(`Error fetching ${a_id} bus`, error);
    throw error
  }
}

export const updateBus = async (id, a_bus) =>{
  try {
    const response = await axios.put(`${API_URL}/${id}/`, a_bus);
    const {data, status} = response;
    return data
  }catch(error){
    console.log(`Error updating ${id} bus`, error);
    throw error
  }
}

export const createBus = async (a_bus) =>{
  try {
    const response = await axios.post(API_URL, a_bus);
    const {data, status} = response;
    return data
  }catch(error){
    console.log(`Error creating bus`, error);
    throw error
  }
}

export const deleteBus = async (id) =>{
  try {
    const response = await axios.delete(`${API_URL}/${id}/`);
    const {data, status} = response;
    return data
  }catch(error){
    console.log(`Error deleting ${id} bus`, error);
    throw error
  }
}
