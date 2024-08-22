import axios from "axios";
const axiosIntance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_SERVER_URI,
  withCredentials: true,
});

export default axiosIntance;