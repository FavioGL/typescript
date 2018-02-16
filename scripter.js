var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name, username, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    return Person;
}());
var person = new Person("max", "max", 20);
console.log(person);
person.printAge();
//inheritance
var Favio = /** @class */ (function (_super) {
    __extends(Favio, _super);
    function Favio() {
        var _this = _super.call(this, "", "", 0) || this;
        _this.name = 'favio';
        return _this;
    }
    return Favio;
}(Person));
var favio = new Favio();
console.log(favio);
//getters ans setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'DEFAULT';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "ABBBERESS";
console.log(plant.species);
//STATIC properties and methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.1416;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
//abstract classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'default';
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Cool project");
console.log(newProject);
//private constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(namex) {
        name = namex;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('the only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var onlyOne = OnlyOne.getInstance();
// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === void 0) { name = 'Favio'; }
    if (name === undefined) {
        name = "Max";
    }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);
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
/// <reference path="scripts/MyMath.ts"/>
console.log(MyMath.PI);
