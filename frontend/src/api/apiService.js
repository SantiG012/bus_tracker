import axios from 'axios';

class ApiService {
  constructor(entity) {
    this.baseUrl = `${process.env.REACT_APP_API_URL}/api/${entity}`;
  }

  async fetchAll() {
    try {
      const response = await axios.get(this.baseUrl);
      return response.data;
    } catch (error) {
      console.error(`Error fetching all ${this.entity}:`, error);
      throw error;
    }
  }

  async fetchOne(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${this.entity} with id ${id}:`, error);
      throw error;
    }
  }

  async create(data) {
    try {
      const response = await axios.post(`${this.baseUrl}/`, data);
      return response.data;
    } catch (error) {
      console.error(`Error creating ${this.entity}:`, error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await axios.put(`${this.baseUrl}/${id}/`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating ${this.entity} with id ${id}:`, error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const response = await axios.delete(`${this.baseUrl}/${id}/`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting ${this.entity} with id ${id}:`, error);
      throw error;
    }
  }
}

export default ApiService;
