import { ValidationError } from 'validators.types'

export const validators = {
  isCharNumber: (input: string): boolean | ValidationError => {
    if (input.length > 1) {
      return {
        type: 'input',
        message: 'isCharNumber expects a char - string with length of 1',
        received: input,
        info: `Length: ${input.length}`
      }
    } else {
      isNaN(input as any) ? false : true
    }
  },

  hasNumber: (input: string) => input,
}
