import axios from "axios";

const api = axios.create({
  baseURL: "exp://192.168.1.2:3333"
});

export default api;