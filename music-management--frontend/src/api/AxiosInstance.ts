import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const getToken = () => {
  return cookies.get("music_management") ?? "";
};

const PrivateAxiosInstance = axios.create({
  // baseURL: import.meta.env.MUSIC_MANAGEMENT_API_URL,
  baseURL: "http://localhost:8000/api/v1",
  timeout: 10000,
});

PrivateAxiosInstance.interceptors.request.use(async (config: any) => {
  console.log("config", config);
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});

export default PrivateAxiosInstance;
