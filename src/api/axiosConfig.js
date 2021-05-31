import axios from "axios";

export const streamRequest = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});
