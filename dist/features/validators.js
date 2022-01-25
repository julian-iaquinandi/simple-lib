"use strict";
exports.__esModule = true;
exports.includesNumber = exports.isCharNumber = void 0;
var isValidationError = function (validation) { return validation.message !== undefined; };
var isCharNumber = function (input) {
    if (input.length > 1) {
        return {
            type: 'input',
            message: 'isCharNumber expects a char - string with length of 1',
            received: input,
            info: "Length: ".concat(input.length)
        };
    }
    else {
        return isNaN(input) ? false : true;
    }
};
exports.isCharNumber = isCharNumber;
var includesNumber = function (input) {
    var inputArr = input.split("");
    var output = [];
    var error;
    // TODO: Check input for errors
    for (var _i = 0, inputArr_1 = inputArr; _i < inputArr_1.length; _i++) {
        var char = inputArr_1[_i];
        var result_1 = (0, exports.isCharNumber)(char);
        if (isValidationError(result_1)) {
            error = result_1;
            break;
        }
        error = null;
        output.push(result_1);
    }
    if (error)
        return error;
    var result = output.includes(true);
    return result;
};
exports.includesNumber = includesNumber;
