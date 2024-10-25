import axios from 'axios';

const API_URL = `http://localhost:8000/api/auth/`;

export const authenticate = async (data) => {
  const {email:username, password} = data;
  try {
    const response = await axios.post(`${API_URL}jwt/create/`, {
      username,
      password,
    });
    const {access, refresh } = response.data;
    return {access, refresh, error:null};
    
  } catch (error) {
    console.error('Error en la autenticación:', error);
    return {access:null, refresh:null, error:'No autorizado!'};
  }
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

export const logout= ()=>{
  localStorage.removeItem("authToken"); 
  localStorage.removeItem("refreshToken"); 
}