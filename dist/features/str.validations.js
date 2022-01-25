"use strict";
exports.__esModule = true;
exports.str = void 0;
var type_gaurds_1 = require("../type-gaurds");
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
var includesNumber = function (input) {
    var inputArr = input.split("");
    var output = [];
    var error;
    for (var _i = 0, inputArr_1 = inputArr; _i < inputArr_1.length; _i++) {
        var char = inputArr_1[_i];
        var result = isCharNumber(char);
        if ((0, type_gaurds_1.isValidationError)(result)) {
            error = result;
            break;
        }
        error = null;
        output.push(result);
    }
    if (error)
        return error;
    return output.includes(true);
};
exports.str = {
    isCharNumber: isCharNumber,
    includesNumber: includesNumber
};
