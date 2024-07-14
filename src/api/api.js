import axios from "axios";

const api = axios.create({
  baseURL: "http://13.124.240.85:8080",
});

export default api;
