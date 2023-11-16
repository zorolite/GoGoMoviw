import axios from "axios";
import { API_URL } from "./constants";

const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: "0a4e6b11d3338eb307aec340c24bcbc6",
  },
});

export default instance;
