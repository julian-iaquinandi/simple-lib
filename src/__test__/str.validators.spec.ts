import { str } from '../features/str.validations'

test('isCharNumber - Is the input string a number', () => {
  expect(str.isCharNumber('a')).toBe(false)
  expect(str.isCharNumber('1')).toBe(true)
  expect(str.isCharNumber('$')).toBe(false)
})

test('isCharNumber - Is the input string a char, input.length === 1) ', () => {
  expect(str.isCharNumber('aa')).toStrictEqual({
    type: 'input',
    message: 'isCharNumber expects a char - string with length of 1',
    received: 'aa',
    info: `Length: 2`
  })
})

test('includesNumber - Checks if string contains a number', () => {
  expect(str.includesNumber('akakakal1')).toBe(true)
  expect(str.includesNumber('1')).toBe(true)
  expect(str.includesNumber('aaaaaa')).toBe(false)
})

