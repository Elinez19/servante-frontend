import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { Register, resetAuth } from "@/services/features/auth/authSlice";
import {
  registerCustomerSchema,
  registerHandymanSchema,
  type RegisterCustomerInput,
  type RegisterHandymanInput,
} from "@/lib/validations/auth";

type RegisterFormData = RegisterCustomerInput | RegisterHandymanInput;

export default function useRegisterForm() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: RootState) => state.auth
  );

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"customer" | "handyman">(
    "customer"
  );

  // Get the appropriate schema based on selected role
  const currentSchema =
    selectedRole === "customer"
      ? registerCustomerSchema
      : registerHandymanSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(currentSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      role: "customer",
      profile: {
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        preferredContactMethod: "email",
      },
    },
  });

  // Reset form when role changes
  useEffect(() => {
    setValue("role", selectedRole);
    if (selectedRole === "customer") {
      reset({
        email: "",
        password: "",
        confirmPassword: "",
        role: "customer",
        profile: {
          firstName: "",
          lastName: "",
          phone: "",
          address: "",
          preferredContactMethod: "email",
        },
      });
    } else {
      reset({
        email: "",
        password: "",
        confirmPassword: "",
        role: "handyman",
        profile: {
          firstName: "",
          lastName: "",
          phone: "",
          skills: undefined,
          experience: undefined,
          hourlyRate: undefined,
          availability: undefined,
          bio: undefined,
          certifications: undefined,
        },
      });
    }
  }, [selectedRole, setValue, reset]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(
        "Account registered successfully! Please check your email to verify your account."
      );
      setTimeout(() => {
        router.push("/login");
        dispatch(resetAuth());
      }, 2000);
    }

    if (isError && message) {
      toast.error(message);
      dispatch(resetAuth());
    }
  }, [isSuccess, isError, message, router, dispatch]);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      // Transform the data if it's a handyman registration
      let transformedData = { ...data };

      if (data.role === "handyman") {
        // Transform comma-separated strings to arrays for skills and certifications
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const profile = data.profile as any;

        // Only include fields that have values
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const transformedProfile: any = {
          firstName: profile.firstName,
          lastName: profile.lastName,
        };

        // Add phone if provided
        if (profile.phone) {
          transformedProfile.phone = profile.phone;
        }

        // Transform skills if provided
        if (
          profile.skills &&
          typeof profile.skills === "string" &&
          profile.skills.trim()
        ) {
          transformedProfile.skills = profile.skills
            .split(",")
            .map((s: string) => s.trim())
            .filter(Boolean);
        }

        // Add experience if provided
        if (profile.experience !== undefined && profile.experience !== null) {
          transformedProfile.experience = profile.experience;
        }

        // Add hourly rate if provided
        if (profile.hourlyRate !== undefined && profile.hourlyRate !== null) {
          transformedProfile.hourlyRate = profile.hourlyRate;
        }

        // Add availability if provided
        if (profile.availability) {
          transformedProfile.availability = profile.availability;
        }

        // Add bio if provided
        if (profile.bio) {
          transformedProfile.bio = profile.bio;
        }

        // Transform certifications if provided
        if (
          profile.certifications &&
          typeof profile.certifications === "string" &&
          profile.certifications.trim()
        ) {
          transformedProfile.certifications = profile.certifications
            .split(",")
            .map((s: string) => s.trim())
            .filter(Boolean);
        }

        transformedData = {
          ...data,
          profile: transformedProfile,
        };
      }

      await dispatch(Register(transformedData)).unwrap();
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isLoading,
    selectedRole,
    setSelectedRole,
    watch,
    reset,
    setValue,
  };
}
