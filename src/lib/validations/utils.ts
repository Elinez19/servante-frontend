import { z } from "zod";
import { ValidationError, ValidationResult } from "./auth";

/**
 * Validates data against a Zod schema and returns a structured result
 */
export function validateData<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): ValidationResult<T> {
  try {
    const validatedData = schema.parse(data);
    return {
      success: true,
      data: validatedData,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: ValidationError[] = error.issues.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return {
        success: false,
        errors,
      };
    }

    return {
      success: false,
      errors: [
        {
          field: "unknown",
          message: "Validation failed",
        },
      ],
    };
  }
}

/**
 * Safely validates data and throws an error if validation fails
 */
export function validateOrThrow<T>(schema: z.ZodSchema<T>, data: unknown): T {
  const result = validateData(schema, data);

  if (!result.success) {
    const errorMessage =
      result.errors?.map((err) => `${err.field}: ${err.message}`).join(", ") ||
      "Validation failed";

    throw new Error(errorMessage);
  }

  return result.data!;
}

/**
 * Validates data and returns only the errors (useful for form validation)
 */
export function getValidationErrors<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): ValidationError[] {
  const result = validateData(schema, data);
  return result.errors || [];
}

/**
 * Checks if data is valid without throwing errors
 */
export function isValid<T>(schema: z.ZodSchema<T>, data: unknown): data is T {
  return schema.safeParse(data).success;
}

/**
 * Formats validation errors for display
 */
export function formatValidationErrors(errors: ValidationError[]): string {
  return errors.map((err) => `${err.field}: ${err.message}`).join("\n");
}

/**
 * Gets the first validation error message
 */
export function getFirstValidationError(errors: ValidationError[]): string {
  return errors.length > 0 ? errors[0].message : "Validation failed";
}

/**
 * Groups validation errors by field
 */
export function groupErrorsByField(
  errors: ValidationError[]
): Record<string, string[]> {
  return errors.reduce((acc, error) => {
    if (!acc[error.field]) {
      acc[error.field] = [];
    }
    acc[error.field].push(error.message);
    return acc;
  }, {} as Record<string, string[]>);
}
