import axios from "axios";
import {
  getToken
} from "./tool";
const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers.Authorization = "Bearer " + getToken();
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
request.interceptors.response.use(
  (response) => {
    const code = response.data.code;
    switch (code) {
      case 200: //为200执行该行
        return response.data; //成功直接返回
      case 401: //为1300执行该行
        return;
      case 500: //为1300执行该行
        return;
      default: //都不相同执行该行
        return response.data;
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default request;