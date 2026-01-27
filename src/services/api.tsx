import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3003", // 👈 BACKEND URL
  headers: {
    "Content-Type": "application/json",
  },
});
