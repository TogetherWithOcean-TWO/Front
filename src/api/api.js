// src/api/api.js

import axios from "axios";
import { getItem } from "../utils/asyncStorage";

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: "http://13.124.240.85:8080",
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  async (config) => {
    // AsyncStorage에서 토큰 가져오기
    const token = await getItem("token");

    // 토큰이 있는 경우 헤더에 추가
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
