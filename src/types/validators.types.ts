type ValidationErrors = 'input'

export interface ValidationError {
  type: ValidationErrors,
  message: string,
  received: string,
  info: string
}
