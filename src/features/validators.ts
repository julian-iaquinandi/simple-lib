import { Validation, ValidationError } from '../types'

const isValidationError = (validation: Validation | ValidationError): validation is ValidationError => (validation as ValidationError).message !== undefined

export const isCharNumber = (input: string): boolean | ValidationError => {
  if (input.length > 1) {
    return {
      type: 'input',
      message: 'isCharNumber expects a char - string with length of 1',
      received: input,
      info: `Length: ${input.length}`
    }
  } else {
    return isNaN(input as any) ? false : true
  }
}

export const includesNumber = (input: string): Validation => {
  const inputArr = input.split("")
  const output: Validation = []
  let error: ValidationError | null

  // TODO: Check input for errors

  for (const char of inputArr) {
    const result = isCharNumber(char)

    if (isValidationError(result)) {
      error = result
      break
    }

    error = null
    output.push(result)
  }

  if (error) return error

  const result = output.includes(true)

  return result

}


