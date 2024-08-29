// utils/api.ts
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

// Room APIs
export const fetchRooms = async () => {
  const response = await axios.get(`${API_URL}/rooms`);
  return response.data;
};

export const createRoom = async (data: any) => {
  const response = await axios.post(`${API_URL}/rooms`, data);
  return response.data;
};

export const updateRoom = async (id: number, data: any) => {
  const response = await axios.put(`${API_URL}/rooms/${id}`, data);
  return response.data;
};

export const deleteRoom = async (id: number) => {
  const response = await axios.delete(`${API_URL}/rooms/${id}`);
  return response.data;
};

// Room Availability APIs
export const createRoomAvailability = async (roomId: number, data: any) => {
  const response = await axios.post(`${API_URL}/rooms/${roomId}/availability`, data);
  return response.data;
};

export const fetchRoomAvailabilities = async (roomId: number) => {
  const response = await axios.get(`${API_URL}/rooms/${roomId}/availability`);
  return response.data;
};

// Peak Season Rate APIs
export const createPeakSeasonRate = async (roomId: number, data: any) => {
  const response = await axios.post(`${API_URL}/rooms/${roomId}/peak-rates`, data);
  return response.data;
};

export const fetchPeakSeasonRates = async (roomId: number) => {
  const response = await axios.get(`${API_URL}/rooms/${roomId}/peak-rates`);
  return response.data;
};
