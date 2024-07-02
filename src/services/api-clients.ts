import axios from "axios";

const createAxiosInstance = (baseURL:string) => {
  return axios.create({
    baseURL: baseURL,
  });
};

export default createAxiosInstance;