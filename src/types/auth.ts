export interface SignInFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: "client" | "provider";
  acceptTerms: boolean;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    userType: "client" | "provider";
  };
  token?: string;
}

export interface AuthError {
  field?: string;
  message: string;
}
