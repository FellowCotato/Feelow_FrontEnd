import axios from "axios";

const api = axios.create({
  baseURL: "http://43.200.217.72:8080",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default api;
