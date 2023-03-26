// import axios from axios module
import  axios from "axios";

// import baseurl form constants  created a common baseurl
import { baseUrl } from "./Constants/Constants";

// createing a axios instance by calling the movide db Api
const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
