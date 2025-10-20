import Axios from "axios";

// export const baseURL = "http://localhost:3006";
export const baseURL = "https://assessment-backend-beryl.vercel.app/";

const axiosClient = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor for error handling
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("Network Error:", error.message);
      // Enhance network error message
      error.message =
        "Unable to connect to server. Please check your internet connection and try again.";
    } else {
      console.error("Request Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export { axiosClient };
