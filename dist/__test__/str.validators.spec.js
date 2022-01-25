"use strict";
exports.__esModule = true;
var str_validations_1 = require("../features/str.validations");
test('isCharNumber - Is the input string a number', function () {
    expect(str_validations_1.str.isCharNumber('a')).toBe(false);
    expect(str_validations_1.str.isCharNumber('1')).toBe(true);
    expect(str_validations_1.str.isCharNumber('$')).toBe(false);
});
test('isCharNumber - Is the input string a char, input.length === 1) ', function () {
    expect(str_validations_1.str.isCharNumber('aa')).toStrictEqual({
        type: 'input',
        message: 'isCharNumber expects a char - string with length of 1',
        received: 'aa',
        info: "Length: 2"
    });
});
test('includesNumber - Checks if string contains a number', function () {
    expect(str_validations_1.str.includesNumber('akakakal1')).toBe(true);
    expect(str_validations_1.str.includesNumber('1')).toBe(true);
    expect(str_validations_1.str.includesNumber('aaaaaa')).toBe(false);
});
