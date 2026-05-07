import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const loginUser = async (data) => {
  return API.post("/auth/login", data);
};

export const registerUser = async (data) => {
  return API.post("/auth/register", data);
};

export const getTemplates = async () => {
  return API.get("/templates");
};

export const generateDocument = async (data) => {
  return API.post("/documents/generate", data);
};