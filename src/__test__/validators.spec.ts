
// const sum = require('./sum');
import { isCharNumber, includesNumber } from '../features/validators'

test('isCharNumber - Is the input string a number', () => {
  expect(isCharNumber('a')).toBe(false)
  expect(isCharNumber('1')).toBe(true)
  expect(isCharNumber('$')).toBe(false)
})

test('isCharNumber - Is the input string a char length === 1) ', () => {

  expect(isCharNumber('aa')).toStrictEqual({
    type: 'input',
    message: 'isCharNumber expects a char - string with length of 1',
    received: 'aa',
    info: `Length: 2`
  })
})

test('Checks if string contains a number', () => {
  expect(includesNumber('akakakal1')).toBe(true)
  expect(includesNumber('1')).toBe(true)
  expect(includesNumber('aaaaaa')).toBe(false)
})
