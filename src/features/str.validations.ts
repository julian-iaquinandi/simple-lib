import { isValidationError } from '../type-gaurds'
import { Validation, ValidationError } from '../types'


const isCharNumber = (input: string): boolean | ValidationError => {
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

const includesNumber = (input: string): Validation => {
  const inputArr = input.split("")
  const output: Validation = []
  let error: ValidationError | null

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

  return output.includes(true)

}

export const str = {
  isCharNumber,
  includesNumber
}
