"use strict";
exports.__esModule = true;
// const sum = require('./sum');
var validators_1 = require("../features/validators");
test('isCharNumber - Is the input string a number', function () {
    expect((0, validators_1.isCharNumber)('a')).toBe(false);
    expect((0, validators_1.isCharNumber)('1')).toBe(true);
    expect((0, validators_1.isCharNumber)('$')).toBe(false);
});
test('isCharNumber - Is the input string a char length === 1) ', function () {
    expect((0, validators_1.isCharNumber)('aa')).toStrictEqual({
        type: 'input',
        message: 'isCharNumber expects a char - string with length of 1',
        received: 'aa',
        info: "Length: 2"
    });
});
test('Checks if string contains a number', function () {
    expect((0, validators_1.includesNumber)('akakakal1')).toBe(true);
    expect((0, validators_1.includesNumber)('1')).toBe(true);
    expect((0, validators_1.includesNumber)('aaaaaa')).toBe(false);
});
