import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import { ILogin } from "@/types/auth_types";
import { createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

// Safely get token from localStorage (only on client side)
const getStoredToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("ServanteAccessToken");
  }
  return null;
};

const initialState = {
  token: getStoredToken(),
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const LoginUser = createAsyncThunkWithHandler(
  "auth/login",
  async (user: ILogin) => {
    return await authService.Login(user);
  }
);

export const LogoutUser = createAsyncThunkWithHandler(
  "auth/logout",
  async () => {
    return await authService.Logout();
  }
);

export const LogoutUserAPI = createAsyncThunkWithHandler(
  "auth/logoutAPI",
  async () => {
    return await authService.LogoutAPI();
  }
);

export const ResetPassword = createAsyncThunkWithHandler(
  "auth/resetPassword",
  async (passwordData: unknown) => {
    return await authService.ResetPassword(passwordData);
  }
);

export const VerifyOrganization = createAsyncThunkWithHandler(
  "auth/verifyOrganization",
  async (verificationData: unknown) => {
    return await authService.VerifyOrganization(verificationData);
  }
);

export const ResendVerification = createAsyncThunkWithHandler(
  "auth/resendVerification",
  async (emailData: unknown) => {
    return await authService.ResendVerification(emailData);
  }
);

export const ForgotPassword = createAsyncThunkWithHandler(
  "auth/forgotPassword",
  async (emailData: unknown) => {
    return await authService.ForgotPassword(emailData);
  }
);

export const Register = createAsyncThunkWithHandler(
  "auth/register",
  async (userData: unknown) => {
    return await authService.Register(userData);
  }
);

export const GetAccessToken = createAsyncThunkWithHandler(
  "auth/getAccessToken",
  async (tokenData: unknown) => {
    return await authService.GetAccessToken(tokenData);
  }
);

export const VerifyEmail = createAsyncThunkWithHandler(
  "auth/verifyEmail",
  async (token: string) => {
    return await authService.VerifyEmail(token);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Login Successfully";
        state.token = action.payload.accessToken;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(LogoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.token = null;
      })
      .addCase(LogoutUserAPI.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.token = null;
      })
      .addCase(LogoutUserAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(ResetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload as string;
      })
      .addCase(ResetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(VerifyOrganization.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload as string;
      })
      .addCase(VerifyOrganization.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(ResendVerification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload as string;
      })
      .addCase(ResendVerification.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(ForgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload as string;
      })
      .addCase(ForgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(Register.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Register Successfully";
      })
      .addCase(Register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(GetAccessToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.token = action.payload.accessToken;
      })
      .addCase(GetAccessToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
        state.token = null;
      })
      .addCase(VerifyEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload as string;
      })
      .addCase(VerifyEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;
