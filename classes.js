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
