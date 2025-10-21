import { z } from "zod";

// Register form schema for organization registration
export const registerFormSchema = z
  .object({
    // Company Information
    name: z.string().min(1, "Company name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    phone: z
      .string()
      .min(1, "Phone is required")
      .regex(/^[0-9+\-() ]{10,20}$/, "Invalid phone number format"),
    address: z.string().min(1, "Address is required"),
    website: z
      .string()
      .min(1, "Website is required")
      .url("Invalid website URL"),
    logo: z
      .instanceof(File)
      .refine((file) => file.size <= 5000000, "File size must be less than 5MB")
      .refine(
        (file) =>
          ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
            file.type
          ),
        "Only .jpg, .jpeg, .png and .webp formats are supported"
      )
      .or(z.string()),

    // Authentication
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),

    // Primary Contact Information
    primaryContact: z.object({
      name: z.string().min(1, "Contact name is required"),
      phone: z
        .string()
        .min(1, "Contact phone is required")
        .regex(/^[0-9+\-() ]{10,20}$/, "Invalid phone number format"),
      email: z
        .string()
        .min(1, "Contact email is required")
        .email("Invalid email format"),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerFormSchema>;
