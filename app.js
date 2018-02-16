console.log("It works!, good job");
var myName = 'favio';
console.log("oh " + myName);
//myName = 28;
var address = ["magnolia", 102];
console.log(address);
var address2;
address2 = ["ok", 1];
console.log(address2);
var address3;
//address3[0] = ["A",1];
//simple function
function returnMyName() {
    return 'favio';
}
console.log(returnMyName());
function makeArray() {
    var arg1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg1[_i] = arguments[_i];
    }
    return arg1;
}
console.log(makeArray(1, 2));
