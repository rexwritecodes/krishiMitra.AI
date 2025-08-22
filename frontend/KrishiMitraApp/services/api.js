import axios from 'axios';

// Base URL for the backend API
// For Android emulator, use 10.0.2.2 instead of localhost
// For iOS simulator, use localhost
// For physical devices, use the actual IP address of your computer
const API_URL = 'http://10.0.2.2:8000';

// Create axios instance with base URL
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// API functions
export const predictDisease = async (imageFile, cropType = null) => {
  try {
    const formData = new FormData();
    formData.append('file', imageFile);
    
    if (cropType) {
      formData.append('crop_type', cropType);
    }

    const response = await apiClient.post('/predict/', formData);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Health check function
export const checkApiHealth = async () => {
  try {
    const response = await apiClient.get('/');
    return response.data;
  } catch (error) {
    console.error('API Health Check Error:', error);
    throw error;
  }
};