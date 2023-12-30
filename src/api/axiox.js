import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "https://asian-live-server.test/api/",
  baseURL: "http://asiantody.test/api/",
  // withCredentials: true,
});

export default axiosClient;

// export default axios.create({
//   baseURL: "http://localhost:8000",
//   withCredentials: true,
// });