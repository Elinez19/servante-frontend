// User roles
export type UserRole = "customer" | "handyman" | "admin";

// Contact methods
export type ContactMethod = "email" | "phone" | "sms";

// Customer profile interface
export interface CustomerProfile {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  preferredContactMethod: ContactMethod;
}

// Handyman profile interface
export interface HandymanProfile {
  firstName: string;
  lastName: string;
  phone: string;
  skills: string[];
  experience: number;
  hourlyRate: number;
  availability: string;
  bio: string;
  certifications: string[];
}

// Union type for profile
export type UserProfile = CustomerProfile | HandymanProfile;

// Registration request interfaces
export interface RegisterCustomerRequest {
  email: string;
  password: string;
  confirmPassword: string;
  role: "customer";
  profile: CustomerProfile;
}

export interface RegisterHandymanRequest {
  email: string;
  password: string;
  confirmPassword: string;
  role: "handyman";
  profile: HandymanProfile;
}

export type RegisterRequest = RegisterCustomerRequest | RegisterHandymanRequest;

// Login request interface
export interface LoginRequest {
  email: string;
  password: string;
  twoFactorCode?: string;
}

// User interface
export interface User {
  id: string;
  email: string;
  role: UserRole;
  isEmailVerified: boolean;
  is2FAEnabled: boolean;
}

// Tokens interface
export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

// Registration response
export interface RegisterResponse {
  success: boolean;
  message: string;
  userId: string;
  verificationToken?: string;
}

// Email verification response
export interface VerifyEmailResponse {
  success: boolean;
  message: string;
}

// Login response
export interface LoginResponse {
  success: boolean;
  message: string;
  user: User;
  tokens: Tokens;
}

// Refresh token request
export interface RefreshTokenRequest {
  refreshToken: string;
}

// Refresh token response
export interface RefreshTokenResponse {
  success: boolean;
  accessToken: string;
}

// Auth error response
export interface AuthErrorResponse {
  success: false;
  message: string;
}

// Legacy interfaces for backward compatibility
// Note: SignInFormData and SignUpFormData are now exported from @lib/validations/auth
// These type re-exports are kept for backward compatibility
export type { SignInFormData, SignUpFormData } from "@/lib/validations/auth";

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
