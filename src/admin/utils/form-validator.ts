import { ValidationRule } from "react-hook-form";

/**
 * Utility functions for validating form inputs.
 */
const FormValidator = {
  whiteSpaceRule: (name: string) =>
    ({
      value: /^[^\s]+(?:$|.*[^\s]+$)/,
      message: `${name} cannot have leading or trailing spaces, or be an empty string.`,
    } as ValidationRule<RegExp>),
  nonNegativeNumberRule: (name: string) => ({
    value: 0,
    message: `${name} cannot be negative.`,
  }),
  minOneCharRule: (name: string) => ({
    value: 1,
    message: `${name} must be at least 1 character.`,
  }),
  min: (name: string, min: number) => ({
    value: min,
    message: `${name} must be greater than or equal to ${min}.`,
  }),
  max: (name: string, max: number) => ({
    value: max,
    message: `${name} must be less than or equal to ${max}.`,
  }),
  required: (name: string) => ({
    value: true,
    message: `${name} is required.`,
  }),
  minLength: (name: string, min: number) => ({
    value: min,
    message: `${name} must be at least ${min} characters.`,
  }),
  email: (name: string) => ({
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: `${name} must be a valid email address.`,
  }),
};

/**
 * The maximum integer value that can be stored in the database.
 */
const MAX_INTEGER = 2147483647;

export default FormValidator;
