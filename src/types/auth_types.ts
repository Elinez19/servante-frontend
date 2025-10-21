// Auth types for the authentication system
export interface ILogin {
  email: string;
  password: string;
  twoFactorCode?: string;
}

export interface ILoginToken {
  data: {
    accessToken: string;
    refreshToken: string;
  };
  message?: string;
  success?: boolean;
}

export interface IRegister {
  email: string;
  password: string;
  confirmPassword: string;
  role: "customer" | "handyman";
  profile: {
    firstName: string;
    lastName: string;
    phone?: string;
    address?: string;
    preferredContactMethod?: "email" | "phone" | "sms";
    skills?: string[];
    experience?: number;
    hourlyRate?: number;
    availability?: string;
    bio?: string;
    certifications?: string[];
  };
}

export interface IAuthResponse {
  success: boolean;
  message: string;
  data?: Record<string, unknown>;
}

export interface IUser {
  id: string;
  email: string;
  role: "customer" | "handyman" | "admin";
  isEmailVerified: boolean;
  is2FAEnabled: boolean;
  profile?: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    address?: string;
    preferredContactMethod?: "email" | "phone" | "sms";
    skills?: string[];
    experience?: number;
    hourlyRate?: number;
    availability?: string;
    bio?: string;
    certifications?: string[];
  };
}
