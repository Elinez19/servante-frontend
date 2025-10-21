"use client";

import Button from "@/components/customs/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  MapPin,
  User,
  Briefcase,
  DollarSign,
  Calendar,
  Award,
} from "lucide-react";
import useRegisterForm from "@/hooks/Form-hooks/useRegisterForm";
import {
  SKILLS_OPTIONS,
  CERTIFICATIONS_OPTIONS,
  AVAILABILITY_OPTIONS,
  EXPERIENCE_LEVELS,
  HOURLY_RATE_RANGES,
} from "@/data/formOptions";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    errors,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isLoading,
    selectedRole,
    setSelectedRole,
    watch,
    setValue,
  } = useRegisterForm();

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <div>
      <div className="text-center mb-5">
        <h1 className="text-2xl font-bold">Create Your Account</h1>
        <p className="text-sm text-gray-500">
          Register to get started with our platform
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
          {/* Role Selection - span both columns */}
          <div className="md:col-span-2 mb-4">
            <Label className="font-medium mb-3 block">
              I want to register as <span className="text-red-500">*</span>
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setSelectedRole("customer")}
                className={`p-4 border-2 rounded-lg transition-all ${
                  selectedRole === "customer"
                    ? "border-black bg-gray-50 dark:bg-gray-800"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                }`}
              >
                <User className="w-6 h-6 mx-auto mb-2" />
                <div className="font-semibold">Customer</div>
                <div className="text-xs text-gray-500">
                  Looking for services
                </div>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole("handyman")}
                className={`p-4 border-2 rounded-lg transition-all ${
                  selectedRole === "handyman"
                    ? "border-black bg-gray-50 dark:bg-gray-800"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                }`}
              >
                <Briefcase className="w-6 h-6 mx-auto mb-2" />
                <div className="font-semibold">Service Provider</div>
                <div className="text-xs text-gray-500">Offering services</div>
              </button>
            </div>
            <input type="hidden" {...register("role")} value={selectedRole} />
          </div>

          {/* First Name */}
          <div className="min-h-20 space-y-2">
            <Label htmlFor="profile.firstName" className="font-medium">
              First Name <span className="text-red-500">*</span>
            </Label>
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="relative mt-1"
            >
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <Input
                id="profile.firstName"
                type="text"
                placeholder="Enter first name"
                {...register("profile.firstName")}
                className={`pl-10 shadow-sm transition-all ${
                  errors.profile?.firstName
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              />
            </motion.div>
            <div className="h-5 mt-1">
              {errors.profile?.firstName && (
                <div className="text-sm text-red-500">
                  {errors.profile.firstName.message}
                </div>
              )}
            </div>
          </div>

          {/* Last Name */}
          <div className="min-h-20 space-y-2">
            <Label htmlFor="profile.lastName" className="font-medium">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="relative mt-1"
            >
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <Input
                id="profile.lastName"
                type="text"
                placeholder="Enter last name"
                {...register("profile.lastName")}
                className={`pl-10 shadow-sm transition-all ${
                  errors.profile?.lastName
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              />
            </motion.div>
            <div className="h-5 mt-1">
              {errors.profile?.lastName && (
                <div className="text-sm text-red-500">
                  {errors.profile.lastName.message}
                </div>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="min-h-20 space-y-2">
            <Label htmlFor="email" className="font-medium">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="relative mt-1"
            >
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                {...register("email")}
                className={`pl-10 shadow-sm transition-all ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              />
            </motion.div>
            <div className="h-5 mt-1">
              {errors.email && (
                <div className="text-sm text-red-500">
                  {errors.email.message}
                </div>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="min-h-20 space-y-2">
            <Label htmlFor="profile.phone" className="font-medium">
              Phone{" "}
              {selectedRole === "customer" && (
                <span className="text-gray-500 text-xs">(Optional)</span>
              )}
            </Label>
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="relative mt-1"
            >
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <Input
                id="profile.phone"
                type="text"
                placeholder="Enter phone number"
                {...register("profile.phone")}
                className={`pl-10 shadow-sm transition-all ${
                  errors.profile?.phone
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              />
            </motion.div>
            <div className="h-5 mt-1">
              {errors.profile?.phone && (
                <div className="text-sm text-red-500">
                  {errors.profile.phone.message}
                </div>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="min-h-20 space-y-2">
            <Label htmlFor="password" className="font-medium">
              Password <span className="text-red-500">*</span>
            </Label>
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="relative mt-1"
            >
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password")}
                className={`pl-10 pr-12 shadow-sm transition-all ${
                  errors.password
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
              >
                {showPassword ? (
                  <Eye className="text-gray-500 dark:text-gray-400 w-5 h-5" />
                ) : (
                  <EyeOff className="text-gray-500 dark:text-gray-400 w-5 h-5" />
                )}
              </span>
            </motion.div>
            <div className="h-5 mt-1">
              {errors.password && (
                <div className="text-sm text-red-500">
                  {errors.password.message}
                </div>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="min-h-20 space-y-2">
            <Label htmlFor="confirmPassword" className="font-medium">
              Confirm Password <span className="text-red-500">*</span>
            </Label>
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="relative mt-1"
            >
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                {...register("confirmPassword")}
                className={`pl-10 pr-12 shadow-sm transition-all ${
                  errors.confirmPassword
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
              >
                {showConfirmPassword ? (
                  <Eye className="text-gray-500 dark:text-gray-400 w-5 h-5" />
                ) : (
                  <EyeOff className="text-gray-500 dark:text-gray-400 w-5 h-5" />
                )}
              </span>
            </motion.div>
            <div className="h-5 mt-1">
              {errors.confirmPassword && (
                <div className="text-sm text-red-500">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
          </div>

          {/* Customer-specific fields */}
          {selectedRole === "customer" && (
            <>
              {/* eslint-disable @typescript-eslint/no-explicit-any */}
              {/* Address */}
              <div className="md:col-span-2 min-h-20 space-y-2">
                <Label htmlFor="profile.address" className="font-medium">
                  Address <span className="text-red-500">*</span>
                </Label>
                <motion.div
                  variants={inputVariants}
                  whileFocus="focus"
                  className="relative mt-1"
                >
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                  <Input
                    id="profile.address"
                    type="text"
                    placeholder="Enter your address"
                    {...register("profile.address")}
                    className={`pl-10 shadow-sm transition-all ${
                      (errors.profile as any)?.address
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 dark:border-gray-700"
                    }`}
                  />
                </motion.div>
                <div className="h-5 mt-1">
                  {(errors.profile as any)?.address && (
                    <div className="text-sm text-red-500">
                      {(errors.profile as any).address.message}
                    </div>
                  )}
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div className="md:col-span-2 min-h-20 space-y-2">
                <Label
                  htmlFor="profile.preferredContactMethod"
                  className="font-medium"
                >
                  Preferred Contact Method{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value="email"
                      {...register("profile.preferredContactMethod")}
                      className="w-4 h-4"
                    />
                    <span>Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value="phone"
                      {...register("profile.preferredContactMethod")}
                      className="w-4 h-4"
                    />
                    <span>Phone</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value="sms"
                      {...register("profile.preferredContactMethod")}
                      className="w-4 h-4"
                    />
                    <span>SMS</span>
                  </label>
                </div>
                <div className="h-5 mt-1">
                  {(errors.profile as any)?.preferredContactMethod && (
                    <div className="text-sm text-red-500">
                      {(errors.profile as any).preferredContactMethod.message}
                    </div>
                  )}
                </div>
              </div>
              {/* eslint-enable @typescript-eslint/no-explicit-any */}
            </>
          )}

          {/* Handyman-specific fields */}
          {selectedRole === "handyman" && (
            <>
              {/* eslint-disable @typescript-eslint/no-explicit-any */}
              {/* Skills */}
              <div className="md:col-span-2 min-h-20 space-y-2">
                <Label htmlFor="profile.skills" className="font-medium">
                  Skills{" "}
                  <span className="text-xs text-gray-500 ml-2">
                    (optional, select multiple)
                  </span>
                </Label>
                <motion.div
                  variants={inputVariants}
                  whileFocus="focus"
                  className="relative mt-1"
                >
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                  <Select
                    onValueChange={(value) => {
                      const currentSkills = watch("profile.skills") || [];
                      const skillsArray = Array.isArray(currentSkills)
                        ? currentSkills
                        : [];
                      if (!skillsArray.includes(value)) {
                        setValue("profile.skills", [...skillsArray, value]);
                      }
                    }}
                  >
                    <SelectTrigger
                      className={`pl-10 shadow-sm transition-all ${
                        (errors.profile as any)?.skills
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <SelectValue placeholder="Select skills..." />
                    </SelectTrigger>
                    <SelectContent>
                      {SKILLS_OPTIONS.map((skill) => (
                        <SelectItem key={skill} value={skill}>
                          {skill}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
                {/* Display selected skills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {Array.isArray(watch("profile.skills"))
                    ? (watch("profile.skills") as string[]).map(
                        (skill: string) => (
                          <span
                            key={skill}
                            className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm flex items-center gap-1"
                          >
                            {skill}
                            <button
                              type="button"
                              onClick={() => {
                                const currentSkills =
                                  watch("profile.skills") || [];
                                const skillsArray = Array.isArray(currentSkills)
                                  ? currentSkills
                                  : [];
                                setValue(
                                  "profile.skills",
                                  skillsArray.filter((s) => s !== skill)
                                );
                              }}
                              className="text-gray-500 hover:text-red-500"
                            >
                              ×
                            </button>
                          </span>
                        )
                      )
                    : null}
                </div>
                <div className="h-5 mt-1">
                  {(errors.profile as any)?.skills && (
                    <div className="text-sm text-red-500">
                      {(errors.profile as any).skills.message}
                    </div>
                  )}
                </div>
              </div>

              {/* Experience */}
              <div className="min-h-20 space-y-2">
                <Label htmlFor="profile.experience" className="font-medium">
                  Years of Experience{" "}
                  <span className="text-gray-500 text-xs">(optional)</span>
                </Label>
                <motion.div
                  variants={inputVariants}
                  whileFocus="focus"
                  className="relative mt-1"
                >
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                  <Select
                    onValueChange={(value) => {
                      setValue("profile.experience", parseInt(value));
                    }}
                  >
                    <SelectTrigger
                      className={`pl-10 shadow-sm transition-all ${
                        (errors.profile as any)?.experience
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <SelectValue placeholder="Select experience level..." />
                    </SelectTrigger>
                    <SelectContent>
                      {EXPERIENCE_LEVELS.map((level) => (
                        <SelectItem
                          key={level.value}
                          value={level.value.toString()}
                        >
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
                <div className="h-5 mt-1">
                  {(errors.profile as any)?.experience && (
                    <div className="text-sm text-red-500">
                      {(errors.profile as any).experience.message}
                    </div>
                  )}
                </div>
              </div>

              {/* Hourly Rate */}
              <div className="min-h-20 space-y-2">
                <Label htmlFor="profile.hourlyRate" className="font-medium">
                  Hourly Rate ($){" "}
                  <span className="text-gray-500 text-xs">(optional)</span>
                </Label>
                <motion.div
                  variants={inputVariants}
                  whileFocus="focus"
                  className="relative mt-1"
                >
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                  <Select
                    onValueChange={(value) => {
                      setValue("profile.hourlyRate", parseInt(value));
                    }}
                  >
                    <SelectTrigger
                      className={`pl-10 shadow-sm transition-all ${
                        (errors.profile as any)?.hourlyRate
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <SelectValue placeholder="Select hourly rate range..." />
                    </SelectTrigger>
                    <SelectContent>
                      {HOURLY_RATE_RANGES.map((rate) => (
                        <SelectItem
                          key={rate.value}
                          value={rate.value.toString()}
                        >
                          {rate.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
                <div className="h-5 mt-1">
                  {(errors.profile as any)?.hourlyRate && (
                    <div className="text-sm text-red-500">
                      {(errors.profile as any).hourlyRate.message}
                    </div>
                  )}
                </div>
              </div>

              {/* Availability */}
              <div className="md:col-span-2 min-h-20 space-y-2">
                <Label htmlFor="profile.availability" className="font-medium">
                  Availability{" "}
                  <span className="text-gray-500 text-xs">(optional)</span>
                </Label>
                <motion.div
                  variants={inputVariants}
                  whileFocus="focus"
                  className="relative mt-1"
                >
                  <Select
                    onValueChange={(value) => {
                      setValue("profile.availability", value);
                    }}
                  >
                    <SelectTrigger
                      className={`shadow-sm transition-all ${
                        (errors.profile as any)?.availability
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <SelectValue placeholder="Select availability..." />
                    </SelectTrigger>
                    <SelectContent>
                      {AVAILABILITY_OPTIONS.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
                <div className="h-5 mt-1">
                  {(errors.profile as any)?.availability && (
                    <div className="text-sm text-red-500">
                      {(errors.profile as any).availability.message}
                    </div>
                  )}
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-2 min-h-20 space-y-2">
                <Label htmlFor="profile.bio" className="font-medium">
                  Bio <span className="text-gray-500 text-xs">(optional)</span>
                </Label>
                <Textarea
                  id="profile.bio"
                  placeholder="Tell us about your experience and expertise"
                  {...register("profile.bio")}
                  className={`shadow-sm transition-all min-h-[100px] ${
                    (errors.profile as any)?.bio
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                />
                <div className="h-5 mt-1">
                  {(errors.profile as any)?.bio && (
                    <div className="text-sm text-red-500">
                      {(errors.profile as any).bio.message}
                    </div>
                  )}
                </div>
              </div>

              {/* Certifications */}
              <div className="md:col-span-2 min-h-20 space-y-2">
                <Label htmlFor="profile.certifications" className="font-medium">
                  Certifications{" "}
                  <span className="text-xs text-gray-500 ml-2">
                    (optional, select multiple)
                  </span>
                </Label>
                <motion.div
                  variants={inputVariants}
                  whileFocus="focus"
                  className="relative mt-1"
                >
                  <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                  <Select
                    onValueChange={(value) => {
                      const currentCerts =
                        watch("profile.certifications") || [];
                      const certsArray = Array.isArray(currentCerts)
                        ? currentCerts
                        : [];
                      if (!certsArray.includes(value)) {
                        setValue("profile.certifications", [
                          ...certsArray,
                          value,
                        ]);
                      }
                    }}
                  >
                    <SelectTrigger
                      className={`pl-10 shadow-sm transition-all ${
                        (errors.profile as any)?.certifications
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <SelectValue placeholder="Select certifications..." />
                    </SelectTrigger>
                    <SelectContent>
                      {CERTIFICATIONS_OPTIONS.map((cert) => (
                        <SelectItem key={cert} value={cert}>
                          {cert}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
                {/* Display selected certifications */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {Array.isArray(watch("profile.certifications"))
                    ? (watch("profile.certifications") as string[]).map(
                        (cert: string) => (
                          <span
                            key={cert}
                            className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm flex items-center gap-1"
                          >
                            {cert}
                            <button
                              type="button"
                              onClick={() => {
                                const currentCerts =
                                  watch("profile.certifications") || [];
                                const certsArray = Array.isArray(currentCerts)
                                  ? currentCerts
                                  : [];
                                setValue(
                                  "profile.certifications",
                                  certsArray.filter((c) => c !== cert)
                                );
                              }}
                              className="text-gray-500 hover:text-red-500"
                            >
                              ×
                            </button>
                          </span>
                        )
                      )
                    : null}
                </div>
                <div className="h-5 mt-1">
                  {(errors.profile as any)?.certifications && (
                    <div className="text-sm text-red-500">
                      {(errors.profile as any).certifications.message}
                    </div>
                  )}
                </div>
              </div>
              {/* eslint-enable @typescript-eslint/no-explicit-any */}
            </>
          )}

          {/* Submit Button - span both columns */}
          <div className="md:col-span-2 mt-6">
            <Button
              isLoading={isLoading}
              type="submit"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? "Registering..." : "Create Account"}
            </Button>
          </div>

          {/* Sign In Link - span both columns */}
          <div className="md:col-span-2 text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-black hover:text-gray-700 font-semibold transition-colors"
            >
              Sign in
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
