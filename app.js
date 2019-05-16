"use strict";
exports.__esModule = true;
var Students_1 = require("./src/Students");
// Enum
var KnownLanguage;
(function (KnownLanguage) {
    KnownLanguage[KnownLanguage["Tagalog"] = 0] = "Tagalog";
    KnownLanguage[KnownLanguage["Bisaya"] = 1] = "Bisaya";
    KnownLanguage[KnownLanguage["Waray"] = 2] = "Waray";
})(KnownLanguage || (KnownLanguage = {}));
var Tagalog = KnownLanguage.Tagalog, Bisaya = KnownLanguage.Bisaya, Waray = KnownLanguage.Waray;
var obj = {
    name: 'Ian',
    age: 34,
    language: KnownLanguage[Tagalog]
};
var arryList = [
    { name: 'Josh', age: 28, language: KnownLanguage[Bisaya] },
    { name: 'Julie', age: 34, language: KnownLanguage[Waray] }
];
arryList.unshift(obj);
// Function Declaration
function showNames(name) {
    name.forEach(function (item) {
        return console.log("Name: " + item.name + " Age: " + item.age + " Language: " + item.language);
    });
}
// Function Declaration Generics
function showNamesG(name) {
    name.forEach(function (item) {
        return console.log("Name: " + item.name + " Age: " + item.age + " Language: " + item.language);
    });
}
// Rest Parameter
function showNums() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (num) { return console.log(num); });
}
// Default Parameter
function showGreetings(text) {
    if (text === void 0) { text = 'Hello'; }
    console.log(text);
}
showNames(arryList);
showNums(1, 2, 3);
showGreetings('Good Day');
// ##### Anonymous and Arrow functions #####
var showName = function (fName, lName) {
    console.log("Firstname: " + fName + " ... Lastname: " + lName);
};
var showPangan = function (fName, lName) {
    return console.log("Firstname: " + fName + " ... Lastname: " + lName);
};
var Studyante = new Students_1["default"]('Ian', 'Claros');
//Studyante.fName = 'Zyrus';
console.log(Studyante.GetFullName());
//console.log(Studyante.fName);
//let message;
//message = 'message';
// type assertion
//const length = (<string>message).length;
//const lengthAlternative = (message as string).length;
//# sourceMappingURL=app.js.map