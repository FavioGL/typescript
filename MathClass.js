"use strict";
var MathClass = /** @class */ (function () {
    function MathClass() {
        this.PI = 3.1416;
    }
    MathClass.prototype.getCircumference = function (diameter) {
        return diameter + this.PI;
    };
    return MathClass;
}());
module.exports = MathClass;
