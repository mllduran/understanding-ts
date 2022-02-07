function add2(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult2(num: number):void {
  console.log('Result: ' + num);
}


function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}


// Function Type

let combineValues: (a: number, b: number) => number;

combineValues = add2;

