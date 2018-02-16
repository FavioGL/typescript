"use strict";
exports.__esModule = true;
var MyMath;
(function (MyMath) {
    var PI = 3.1416;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath = exports.MyMath || (exports.MyMath = {}));
