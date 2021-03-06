"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _val;
// a)
function reverseArr(arg) {
    return arg.reverse();
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
//console.log(reverseArr<number>(["a","b","c"])); 
//b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:
class DataHolder {
    constructor(val) { this.val = val; }
    ;
    getValue() { return this.val; }
    ;
    setValue(val) { this.val = val; }
    ;
}
let d = new DataHolder("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());
//d.setValue(456); // IS NOT A STRING
//console.log(d.getValue());
let d2 = new DataHolder(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());
//d2.setValue("pop"); IS NOT A NUMBER
//console.log(d2.getValue());
// c) Rewrite the example above to user getters and setters instead of the silly getXX and setXX methods
class DataHolder2 {
    constructor(val) {
        _val.set(this, void 0);
        __classPrivateFieldSet(this, _val, val);
    }
    ;
    get val() { return __classPrivateFieldGet(this, _val); }
    ;
    set val(val) { __classPrivateFieldSet(this, _val, val); }
    ;
    toString() { return __classPrivateFieldGet(this, _val); }
}
_val = new WeakMap();
let d3 = new DataHolder2("Hello");
console.log(d3.toString());
d3.val = "World2";
console.log(d3.toString());
//# sourceMappingURL=generics.js.map