var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return this.baseValue * this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
var MapItem = /** @class */ (function () {
    function MapItem(xKey, xValue) {
        this.key = xKey;
        this.value = xValue;
    }
    MapItem.prototype.checkKey = function (keyPass) {
        return key == keyPass;
    };
    MapItem.prototype.getValue = function () {
        return this.value;
    };
    MapItem.prototype.toString = function () {
        console.log("key: " + key + " value = " + value);
    };
    return MapItem;
}());
var GenericMap = /** @class */ (function () {
    function GenericMap() {
    }
    GenericMap.prototype.setItem = function (key, item) {
        var element = new MapItem(key, item);
        elements.push(element);
    };
    //getItem(key: string) // should retrieve the value of the provided key
    GenericMap.prototype.clear = function () {
        elements = new Array();
    }; // should remove all key-value pairs
    GenericMap.prototype.printMap = function () {
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var entry = elements_1[_i];
            entry.toString();
        }
    }; // should output key-value pairs
    return GenericMap;
}());
var map = new GenericMap();
map.setItem("1", 1);
map.setItem("2", 2);
map.printMap();
