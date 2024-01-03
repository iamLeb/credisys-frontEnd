// src/http-common.js
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080", // Adjust the base URL based on your API server
  headers: {
    "Content-type": "application/json",
  },
});
