import { encrypt } from "@/helpers/helpers.encryptDecrypt";
import { axiosClient } from "@/services/api/axiosClient";
import { ILogin, ILoginToken } from "@/types/auth_types";
import {
  registerSchema,
  verifyEmailSchema,
  loginSchema,
  refreshTokenSchema,
} from "@/lib/validations/auth";
import { validateOrThrow } from "@/lib/validations/utils";

export const handle_tokens = (response: ILoginToken) => {
  console.log(response);
  const encryptedAccessToken = encrypt(response.data.accessToken);
  const encryptedRefreshToken = encrypt(response.data.refreshToken);

  if (typeof window !== "undefined") {
    localStorage.setItem("ServanteAccessToken", encryptedAccessToken);
    localStorage.setItem("ServanteRefreshToken", encryptedRefreshToken);
  }

  return {
    accessToken: encryptedAccessToken,
    refreshToken: encryptedRefreshToken,
  };
};

const Login = async (userData: ILogin) => {
  // Validate login data
  const validatedData = validateOrThrow(loginSchema, userData);

  const response = await axiosClient.post(`/auth/login`, validatedData);
  return handle_tokens(response.data);
};

const Register = async (userData: unknown) => {
  // Validate registration data
  const validatedData = validateOrThrow(registerSchema, userData);

  const response = await axiosClient.post(`/auth/register`, validatedData);
  return response.data;
};

const VerifyEmail = async (token: string) => {
  // Validate token
  const validatedData = validateOrThrow(verifyEmailSchema, { token });

  const response = await axiosClient.get(
    `/auth/verify-email/${validatedData.token}`
  );
  return response.data;
};

const VerifyOrganization = async (verificationData: unknown) => {
  const response = await axiosClient.post(
    `/auth/verify-organization`,
    verificationData
  );
  return response.data;
};

const ResendVerification = async (emailData: unknown) => {
  const response = await axiosClient.post(
    `/auth/resend-verification`,
    emailData
  );
  return response.data;
};

const GetAccessToken = async (tokenData: unknown) => {
  // Validate refresh token data
  const validatedData = validateOrThrow(refreshTokenSchema, tokenData);

  const response = await axiosClient.post(`/auth/refresh`, validatedData);
  return handle_tokens(response.data);
};

const ForgotPassword = async (emailData: unknown) => {
  const response = await axiosClient.post(`/auth/forgot-password`, emailData);
  return response.data;
};

const ResetPassword = async (resetData: unknown) => {
  const response = await axiosClient.put(`/auth/reset-password`, resetData);
  return response.data;
};

const LogoutAPI = async () => {
  try {
    const response = await axiosClient.post(`/auth/logout`);
    return response.data;
  } catch (error) {
    console.error("Logout API error:", error);
    // Continue with local logout even if API fails
  }
};

export const Logout = async () => {
  // Call logout API first
  await LogoutAPI();

  // Clear local storage
  if (typeof window !== "undefined") {
    localStorage.removeItem("EimpactAccessToken");
    localStorage.removeItem("EimpactRefreshToken");
    localStorage.removeItem("EimpactProfile");

    // Redirect to login
    window.location.href = "/auth/login";
  }
};

// Helper function to check if user is authenticated
export const isAuthenticated = (): boolean => {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("EimpactAccessToken");
    return !!accessToken;
  }
  return false;
};

// Helper function to get tokens from storage
export const getTokens = () => {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("EimpactAccessToken");
    const refreshToken = localStorage.getItem("EimpactRefreshToken");
    return {
      accessToken,
      refreshToken,
    };
  }
  return {
    accessToken: null,
    refreshToken: null,
  };
};

// Helper function to clear all auth data
export const clearAuthData = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("EimpactAccessToken");
    localStorage.removeItem("EimpactRefreshToken");
    localStorage.removeItem("EimpactProfile");
  }
};

const authService = {
  Login,
  Register,
  VerifyEmail,
  VerifyOrganization,
  ResendVerification,
  GetAccessToken,
  ForgotPassword,
  ResetPassword,
  Logout,
  LogoutAPI,
  isAuthenticated,
  getTokens,
  clearAuthData,
};

export default authService;
