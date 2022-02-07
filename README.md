# TypeScript

## What is TypeScript?

- JavaScript Superset
  - Language building up on JavaScript
    - Add Features + Advantages to JavaScript
- TS -- Compile --> JS
  - Features are compiled to JS "workarounds"
- TS add Types
- Catch Errors during development

## Why TypeScript?

- Avoid unwanted Behavior
  - Mitigation Stategies

## TypeScript Overview

- TypeScript Adds
  - Types
  - Can use Next-get JS Features (Compiled down for older Browsers)
  - Interfaces or Generics
  - Meta-Programming Features like Decorators
  - Configuration Options

## Core Types

- number - (1, 5.3, -10) All numbers, no differentiation between integers or floats
- string - ("HI", 'HI', \`HI\`) All text values
- boolean - (true, false) Just there two, no "Truthy" or "Falsy" values
- object - ({age: 30}) Any JavaScript object, more specific types (type of object) are possible
- Array - ([1,2,3]) Any JavaScript array, type can be flexible of strict
- Tuple - ([1,2]) Added by TypeScript: Fixed-length array (also fixed type)
- Enum - (enum{NEW, OLD}) Added by TypeScript: Automatically enumerated global constant identifiers
- Any - (*) Avoid

### [Union Type](./basics/union-aliases.ts)

```function combine(input1: number | string, input2: number | string) {};```

### [Type Aliases](./basics/union-aliases.ts)

```type Combinable = number | string;```

### Function Return Types and Void

- [Return type](./basics/functions.ts)

``` TypeScript
function add(n1: number, n2: number): number {
  return n1 + n2;
}
```

- [Void Type](./basics/functions.ts)

``` TypeScript
function printResult2(num: number):void {
  console.log('Result: ' + num);
}
```

- [Function Type](./basics/functions.ts): Type that describes a function

``` TypeScript
const newAdd: Function
newAdd = add;

// Function Type
let combineValues: (a: number, b: number) => number;

// CALLBACK
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

```

- [Unknown Type](./basics/unknown-never.ts) - Avoid but better than `any`

- [Never Type](./basics/unknown-never.ts) - Utility Function

``` TypeScript
function generateError(message: string, code: number): never {
  throw new Error();
}
```
