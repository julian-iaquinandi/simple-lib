import { Validation, ValidationError } from "../types"

export const isValidationError = (validation: Validation): validation is ValidationError => (validation as ValidationError).message !== undefined
