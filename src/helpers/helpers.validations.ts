import { z } from "zod";

/**
 * Registration form validation schema
 * Matches the API's expected structure for customer/handyman registration
 */
export const registerValidationSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    role: z.enum(["customer", "handyman"]),
    profile: z.object({
      firstName: z.string().min(1, "First name is required"),
      lastName: z.string().min(1, "Last name is required"),
      phone: z
        .string()
        .regex(/^[0-9+\-() ]{10,20}$/, "Invalid phone number format")
        .optional()
        .or(z.literal("")),
      address: z.string().min(1, "Address is required"),
      preferredContactMethod: z.enum(["email", "phone", "sms"]),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

/**
 * Type inference from registration validation schema
 */
export type RegisterFormValues = z.infer<typeof registerValidationSchema>;
