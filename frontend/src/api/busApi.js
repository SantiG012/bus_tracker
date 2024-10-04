import axios from 'axios';

// TODO: create a constants file
const API_URL = "http://localhost:8000/api/buses";
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