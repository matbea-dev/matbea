import axios, { InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL
});
const apiAuth = axios.create({
  baseURL: process.env.BASE_URL
});

const apiRefreshAccessToken = (refreshToken: string) => {
  const formData = new FormData();
  formData.append("refreshToken", refreshToken);
  return api.post("/front/auth/refresh-token", formData);
};

apiAuth.interceptors.response.use(
  async (response) => {
    const originalRequest = response.config as InternalAxiosRequestConfig & {
      _retry: boolean;
    };

    if (response.data.errorCode == 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refresh_token = localStorage.getItem("swap_refreshToken");
      if (refresh_token) {
        const { data } = await apiRefreshAccessToken(refresh_token);
        localStorage.setItem("swap_accessToken", data.data.accessToken);
        localStorage.setItem("swap_refreshToken", data.data.refreshToken);
        originalRequest.headers["access-token"] = data.data.accessToken;
        return axios(originalRequest);
      }
    }

    if (
      (response.data.errorCode && response.data.errorCode !== null) ||
      response.data.type === "error"
    ) {
      return Promise.reject(response);
    }

    return response;
  },
  async function (error) {
    return Promise.reject(error);
  }
);

apiAuth.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("swap_accessToken");
  if (accessToken && config.headers) {
    config.headers["access-token"] = accessToken;
  }
  return config;
});

export { api, apiAuth };
