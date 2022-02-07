"use strict";
function add2(n1, n2) {
    return n1 + n2;
}
function printResult2(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
// Function Type
let combineValues;
combineValues = add2;
