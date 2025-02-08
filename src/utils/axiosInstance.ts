import axios from "axios";
import { getToken } from "./tokenService";

// Buat instance Axios dengan base URL dari environment variable
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Sesuaikan dengan environment variable Anda
});

// Interceptor untuk menambahkan token ke header setiap request
axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor untuk menangani error
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle error response dari server
      console.error("Error Response:", error.response.data);
    } else if (error.request) {
      // Handle error saat request tidak terkirim
      console.error("Error Request:", error.request);
    } else {
      // Handle error lainnya
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
