import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "http://localhost:8000/api",

  headers: {
    "Content-Type": "application/json",
  },

  timeout: 10000,
});

export const login = (credentials) =>
  api.post("/login", credentials);

export const getDashboard = () =>
  api.get("/dashboard");

export const getPatients = () =>
  api.get("/patients");

export const getPatient = (patientId) =>
  api.get(`/patients/${patientId}`);

export default api;