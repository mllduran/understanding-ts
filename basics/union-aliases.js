"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    console.log(resultConversion);
    return result;
}
