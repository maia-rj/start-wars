import axios from "axios";
import { errorInterceptor } from "./interceptors";

const api = axios.create({
  baseURL: "https://swapi.dev/api", // substitua pela sua URL base
});

errorInterceptor(api);

export default api;
