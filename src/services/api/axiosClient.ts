import {
  getAccessToken,
  getRefreshToken,
  clearTokens,
  updateAccessToken,
} from "@/helpers/tokenManager";
import Axios from "axios";

export const baseURL = "https://kleva-server.vercel.app/api/v1";
// export const baseURL= "http://localhost:3006/api/v1";

const axios = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosClient = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosClient.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error?.response?.status;

    // Skip auth errors on login page
    if (window.location.pathname === "/auth") {
      return Promise.reject(error);
    }

    // Handle 401 - Missing authentication info
    if (
      status === 401 &&
      !originalRequest?._retry &&
      !window.location.pathname.includes("auth")
    ) {
      // Check if we have tokens stored
      const refreshToken = getRefreshToken();
      const accessToken = getAccessToken();

      console.log(refreshToken, accessToken);
      if (!refreshToken || !accessToken) {
        // No valid tokens available, redirect to login
        clearTokens();
        if (typeof window !== "undefined") {
          window.location.href = "/auth/login";
        }
        return Promise.reject(error);
      }

      // We have tokens but got 401, might be a server issue
      // Try to refresh tokens once
      originalRequest._retry = true;

      try {
        const response = await axios.post("/auth/refresh", {
          refreshToken,
        });

        if (response?.data?.accessToken) {
          // Update access token in storage
          updateAccessToken(response.data.accessToken);

          // Update authorization header and retry request
          const newAccessToken = response.data.accessToken;
          axiosClient.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${newAccessToken}`;
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return axiosClient(originalRequest);
        } else {
          throw new Error("Invalid token refresh response");
        }
      } catch {
        // Token refresh failed, logout user
        clearTokens();
        if (typeof window !== "undefined") {
          window.location.href = "/auth/login";
        }
        return Promise.reject(error);
      }
    }

    // Handle 403 - Authentication data is invalid (expired token)
    if (status === 403 && !originalRequest?._retry) {
      originalRequest._retry = true;

      // Get tokens for refresh attempt
      const refreshToken = getRefreshToken();
      const accessToken = getAccessToken();

      if (!refreshToken || !accessToken) {
        // No valid tokens to refresh with, logout
        clearTokens();
        if (typeof window !== "undefined") {
          window.location.href = "/auth/login";
        }
        return Promise.reject(error);
      }

      try {
        const response = await axios.post("/auth/refresh", {
          refreshToken,
        });

        if (response?.data?.accessToken) {
          // Update access token in storage
          updateAccessToken(response.data.accessToken);

          // Update authorization header and retry original request
          const newAccessToken = response.data.accessToken;
          axiosClient.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${newAccessToken}`;
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return axiosClient(originalRequest);
        } else {
          throw new Error("Invalid token refresh response");
        }
      } catch {
        // Token refresh failed, logout user
        clearTokens();
        if (typeof window !== "undefined") {
          window.location.href = "/auth/login";
        }
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export { axiosClient };
