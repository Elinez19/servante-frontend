import { z } from "zod";

// Common validation patterns
const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Invalid email format")
  .refine(
    (email) => !email.includes("test") && !email.includes("example"),
    "Test domains are not allowed"
  );

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number");

const phoneSchema = z
  .string()
  .regex(/^[0-9+\-() ]{10,20}$/, "Invalid phone number format")
  .optional();

const contactMethodSchema = z.enum(["email", "phone", "sms"]);

// Customer profile validation
const customerProfileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: phoneSchema,
  address: z.string().min(1, "Address is required"),
  preferredContactMethod: contactMethodSchema,
});

// Handyman profile validation
const handymanProfileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: phoneSchema,
  skills: z.union([z.string(), z.array(z.string())]).optional(),
  experience: z
    .number()
    .min(0, "Experience must be a positive number")
    .optional(),
  hourlyRate: z
    .number()
    .min(0, "Hourly rate must be a positive number")
    .optional(),
  availability: z.string().optional(),
  bio: z.string().optional(),
  certifications: z.union([z.string(), z.array(z.string())]).optional(),
});

// Registration validation schemas
export const registerCustomerSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Password confirmation is required"),
    role: z.literal("customer"),
    profile: customerProfileSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const registerHandymanSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Password confirmation is required"),
    role: z.literal("handyman"),
    profile: handymanProfileSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Union schema for registration
export const registerSchema = z.discriminatedUnion("role", [
  registerCustomerSchema,
  registerHandymanSchema,
]);

// Email verification schema
export const verifyEmailSchema = z.object({
  token: z.string().min(1, "Verification token is required"),
});

// Login schema
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
  twoFactorCode: z.string().length(6, "2FA code must be 6 digits").optional(),
});

// Refresh token schema
export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, "Refresh token is required"),
});

// Type exports for TypeScript
export type RegisterCustomerInput = z.infer<typeof registerCustomerSchema>;
export type RegisterHandymanInput = z.infer<typeof registerHandymanSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type VerifyEmailInput = z.infer<typeof verifyEmailSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type RefreshTokenInput = z.infer<typeof refreshTokenSchema>;

// Sign-in form schema
export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

// Sign-up form schema
export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .regex(/^[a-zA-Z\s]+$/, "First name should only contain letters"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .regex(/^[a-zA-Z\s]+$/, "Last name should only contain letters"),
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    userType: z.enum(["client", "provider"]),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Type exports for forms
export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;

// Validation error type
export interface ValidationError {
  field: string;
  message: string;
}

// Validation result type
export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors?: ValidationError[];
}
