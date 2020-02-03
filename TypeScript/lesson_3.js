"use strict";
// Class -> Module using 'export'
exports.__esModule = true;
var MyClass = /** @class */ (function () {
    function MyClass(_a, _b) {
        this._a = _a;
        this._b = _b;
    }
    Object.defineProperty(MyClass.prototype, "a", {
        set: function (v) {
            this._a = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyClass.prototype, "b", {
        set: function (v) {
            this._b = v;
        },
        enumerable: true,
        configurable: true
    });
    MyClass.prototype.add = function () {
        console.log("Add: " + (this._a + this._b));
    };
    MyClass.prototype.subtract = function () {
        console.log("Subtract: " + (this._a - this._b));
    };
    return MyClass;
}());
exports.MyClass = MyClass;
var x = new MyClass(1, 2);
x.add();
x.subtract();
x.a = 10;
x.b = 5;
x.add();
x.subtract();
