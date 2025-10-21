import { useState, useCallback } from "react";
import { z } from "zod";
import { ValidationError, ValidationResult } from "@/lib/validations/auth";
import { validateData, getValidationErrors } from "@/lib/validations/utils";

/**
 * Hook for form validation using Zod schemas
 */
export function useFormValidation<T>(schema: z.ZodSchema<T>) {
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isValidating, setIsValidating] = useState(false);

  const validate = useCallback(
    async (data: unknown): Promise<ValidationResult<T>> => {
      setIsValidating(true);
      try {
        const result = validateData(schema, data);

        if (result.success) {
          setErrors([]);
        } else {
          setErrors(result.errors || []);
        }

        return result;
      } finally {
        setIsValidating(false);
      }
    },
    [schema]
  );

  const validateField = useCallback(
    (fieldName: string, value: unknown): ValidationError[] => {
      const fieldErrors = getValidationErrors(schema, { [fieldName]: value });
      return fieldErrors.filter((error) => error.field === fieldName);
    },
    [schema]
  );

  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  const hasErrors = errors.length > 0;
  const hasFieldError = useCallback(
    (fieldName: string) => {
      return errors.some((error) => error.field === fieldName);
    },
    [errors]
  );

  const getFieldError = useCallback(
    (fieldName: string) => {
      return errors.find((error) => error.field === fieldName)?.message;
    },
    [errors]
  );

  const getFieldErrors = useCallback(
    (fieldName: string) => {
      return errors.filter((error) => error.field === fieldName);
    },
    [errors]
  );

  return {
    errors,
    isValidating,
    validate,
    validateField,
    clearErrors,
    hasErrors,
    hasFieldError,
    getFieldError,
    getFieldErrors,
  };
}

/**
 * Hook for real-time field validation
 */
export function useFieldValidation<T>(
  schema: z.ZodSchema<T>,
  fieldName: string
) {
  const [fieldErrors, setFieldErrors] = useState<ValidationError[]>([]);

  const validateField = useCallback(
    (value: unknown) => {
      const errors = getValidationErrors(schema, { [fieldName]: value });
      const fieldSpecificErrors = errors.filter(
        (error) => error.field === fieldName
      );
      setFieldErrors(fieldSpecificErrors);
      return fieldSpecificErrors;
    },
    [schema, fieldName]
  );

  const clearFieldErrors = useCallback(() => {
    setFieldErrors([]);
  }, []);

  const hasError = fieldErrors.length > 0;
  const errorMessage = fieldErrors[0]?.message;

  return {
    fieldErrors,
    validateField,
    clearFieldErrors,
    hasError,
    errorMessage,
  };
}
