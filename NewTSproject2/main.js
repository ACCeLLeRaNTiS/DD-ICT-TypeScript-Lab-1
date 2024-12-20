var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function minPositive1(arr) {
    var min = null;
    arr.forEach(function (element) {
        if (element > 0) {
            if (min == null || element < min) {
                min = element;
            }
        }
    });
    return min;
}
var array1 = [3, -1, 0, 7, 10, -5];
console.log("Минимальное положительное значение:", minPositive1(array1));
///////------------------------------------------------------------------------------------
function createBooleanMatrix(matrix) {
    var result = [];
    for (var i = 0; i < matrix.length; i++) {
        var row = [];
        for (var j = 0; j < matrix[i].length; j++) {
            row.push(matrix[i][j].length % 2 != 0);
        }
        result.push(row);
    }
    return result;
}
var stringMatrix = [
    ["AaAa", "AAaaAAaaA"],
    ["BbBb", "BBBBBaaaBB"]
];
console.log("Матрица булевых значений:", createBooleanMatrix(stringMatrix));
function hasEqualDigitSums(tuple) {
    var sumDigits = function (num) {
        return num.toString().split('').reduce(function (sum, digit) { return sum + parseInt(digit); }, 0);
    };
    return sumDigits(tuple[0]) === sumDigits(tuple[1]);
}
var numericTuple = [123, 321];
console.log("Сумма цифр совпадает:", hasEqualDigitSums(numericTuple));
var RnkBases;
(function (RnkBases) {
    RnkBases["Adenine"] = "A";
    RnkBases["Guanine"] = "G";
    RnkBases["Cyrosine"] = "C";
    RnkBases["Peniciline"] = "P";
})(RnkBases || (RnkBases = {}));
console.log("Азотистое основание:", RnkBases.Adenine);
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printPet(pet) {
    console.log("\u0418\u043C\u044F: ".concat(pet.name, ", \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(pet.age, ", \u0414\u0438\u043A\u0438\u0439 \u043E\u0440: ").concat(pet.speak()));
}
var myDog = new Dog();
var myCat = new Cat();
printPet(myDog);
printPet(myCat);
var aminoAcid = {
    base: RnkBases.Adenine,
    name: "Alanine",
    role: "Protein building"
};
console.log("Кислота в JSON:", JSON.stringify(aminoAcid, null, 2));
