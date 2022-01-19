
// const sum = require('./sum');
import { validators } from '../features/validators'

const { isNumber, hasNumber } = validators

test('Checks if char is a number', () => {
  expect(isNumber("1")).toBe("1");
});

test('Checks if string contains a number', () => {
  expect(hasNumber("1")).toBe("0");
});
