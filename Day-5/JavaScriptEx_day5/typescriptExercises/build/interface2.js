"use strict";
// Interfaces 2
// b) Design a function "implementing" this interface which returns an array with the three strings
function myFunc1(mf) {
    let array = [mf.a, mf.b, mf.c];
    return array;
}
const mf = { a: "a", b: "b", c: "c" };
console.log(myFunc1(mf));
function myFunc2(a, b, c) {
    const array = [a, b, c];
    return array;
}
console.log(myFunc2("a", "b", "c"));
//c) Design another implementation that returns an array, with the three strings uppercased.
function myFunc3(mf) {
    const array = [mf.a.toUpperCase(), mf.b.toUpperCase(), mf.c.toUpperCase()];
    return array;
}
console.log(myFunc3(mf));
// e) Test f2 with the two implementations created in b+c.
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = [myFunc1(mf), myFunc2("1", "2", "3"), myFunc3(mf)];
    //let [ a, b, c] = ["A", "B", "C"];
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(f1.a, f1.b, f1.c);
};
f2(mf);
// f) Verify that f2 cannot be used with functions that do not obey the myFunc interface
// f2("a","b","c") dosn't work.
//# sourceMappingURL=interface2.js.map