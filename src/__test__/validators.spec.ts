
// const sum = require('./sum');
import { validators } from '../features/validators'

const { isCharNumber, hasNumber } = validators

test('isCharNumber - Is the input string a number', () => {
  expect(isCharNumber('a')).toBe(false)
  expect(isCharNumber('1')).toBe(true)
})

test('isCharNumber - Is the input string a char length === 1) ', () => {

  expect(isCharNumber('aa')).toStrictEqual({
    type: 'input',
    message: 'isCharNumber expects a char - string with length of 1',
    received: 'aa',
    info: `Length: 2`
  })
})

// test('Checks if string contains a number', () => {
//   expect(hasNumber('1')).toBe('0')
// })
