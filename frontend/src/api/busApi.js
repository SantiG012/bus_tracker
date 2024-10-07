import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/buses`;

export const fetchBuses = async () => {
    try{
        const response = await axios.get(API_URL);
        const {data, status} = response;
        return data;

    }catch(error){
        console.log(error);
        throw error;
    }
}

export const fetchBus = async (id) => {
    try{
        const response = await axios.get(`${API_URL}/${id}`);
        const {data, status} = response;
        return data;

    }catch(error){
        console.log(error);
        throw error;
    }
}

export const createBus = async (bus) => {
    try{
        const response = await axios.post(`${API_URL}/`, bus);
        const {data, status} = response;
        return data;

    }catch(error){
        console.log(error);
        throw error;
    }
}

export const updateBus = async (id, bus) => {
    try{
        const response = await axios.put(`${API_URL}/${id}/`, bus);
        const {data, status} = response;
        return data;

    }catch(error){
        console.log(error);
        throw error;
    }
}

export const deleteBus = async (bus) => {
    try{
        const response = await axios.delete(`${API_URL}/${bus.id}/`);
        const {data, status} = response;
        return data;

    }catch(error){
        console.log(error);
        throw error;
    }
}