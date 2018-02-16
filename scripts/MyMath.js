var MyMath;
(function (MyMath) {
    MyMath.PI = 3.1416;
    function calculateCircumference(diameter) {
        return diameter * MyMath.PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
