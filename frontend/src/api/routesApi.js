import axios from 'axios';

// TODO: create a constants file
// const API_URL = `${process.env.REACT_APP_API_URL}/api/buses/`;
const API_URL = `http://localhost:8000/api/routes/`;
// get all buses
export const fetchRoutes = async () =>{
  try {
    const response = await axios.get(API_URL);
    const {data} = response;
    return data
  }catch(error){
    console.log("Error fetching buses", error);
    throw error
  }
}
// get a bus by id
export const fetchRoutesById = async (a_id) =>{
  try {
    const response = await axios.get(`${API_URL}${a_id}`);
    const {data} = response;
    return data
  }catch(error){
    console.log(`Error fetching ${a_id} bus`, error);
    throw error
  }
}

export const updateRoute = async (id, a_bus) =>{
  try {
    const response = await axios.put(`${API_URL}${id}/`, a_bus);
    const {data} = response;
    return data
  }catch(error){
    console.log(`Error updating ${id} bus`, error);
    throw error
  }
}

export const createRoute = async (a_bus) =>{
  try {
    const response = await axios.post(API_URL, a_bus);
    const {data} = response;
    return data
  }catch(error){
    console.log(`Error creating bus`, error);
    throw error
  }
}

export const deleteRoute = async (id) =>{
  try {
    const response = await axios.delete(`${API_URL}${id}/`);
    const {data} = response;
    return data
  }catch(error){
    console.log(`Error deleting ${id} bus`, error);
    throw error
  }
}
