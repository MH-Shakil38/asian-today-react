import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://asian-live-server.test/api/",
  // withCredentials: true,
});

export default axiosClient;

// export default axios.create({
//   baseURL: "http://localhost:8000",
//   withCredentials: true,
// });