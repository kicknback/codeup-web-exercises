"use strict";

// Loose equality  (==)

let num1 = 5;

let maybeNum2 = "5";

console.log(num1 * maybeNum2);

if (num1 === maybeNum2) {
    console.log("These are equivalent");
}

// Strict equality (===)

// The comparators MUST be of the same data type AND have the same value.