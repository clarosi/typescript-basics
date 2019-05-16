"use strict";
exports.__esModule = true;
// Classes
var Students = /** @class */ (function () {
    function Students(fName, lName) {
        this._fName = fName;
        this._lName = lName;
    }
    Object.defineProperty(Students.prototype, "fName", {
        // shorter syntax
        // constructor(private fName: string, private lName: string) {
        // }
        get: function () {
            return this._fName;
        },
        set: function (value) {
            this._fName = value;
        },
        enumerable: true,
        configurable: true
    });
    Students.prototype.GetFullName = function () {
        return this._fName + " " + this._lName;
    };
    return Students;
}());
exports["default"] = Students;
//export { Students };
//# sourceMappingURL=Students.js.map