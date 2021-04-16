"use strict";

//  Shorthand assignment operators

// += / -=

let name = "Casey";

// name = name + " " + "Edwards";
// console.log(name);

name += " " + "Edwards";
console.log(name);

let daysRemainingInCohort= 114;

daysRemainingInCohort -= 4;

console.log(daysRemainingInCohort);

// MINI exercise

// TODO: Refactor the mini exercise we did earlier on arithmetic operators to use variables and their related shorthand assignment operators, then log out the result
//  ie:
//     var result = 5;
//     console.log(result += 1);

let num = 2;

console.log(num += 2);
num = 8;
console.log(num -= 4);
num = 2;
console.log(num *= 2);
num = 16;
console.log(num /= 4);
num = 20;
console.log(num %= 8);

// Unary

let makeItANumber = "doge";

console.log(-makeItANumber);

// increment/decrement

// post-increment (num++)

let numm = 10;
 console.log(numm++);
 console.log(++numm);

 // JS built-in methods

// console.log()
// window.alert();
// toString();

let newNum = 5 * 5;

newNum = newNum.toString();


console.log(typeof newNum.toString())
console.log(typeof newNum);

let pi = 3.14159;

console.log(pi.toFixed(2));

// Number()

console.log(Number("Casey"));

// isNaN() - checks to see if the value provieds is Not-a-Number

console.log(isNaN("Casey"));

// parseInt()

console.log(parseInt("14098309093 what a number!"));

// .length - prototype property

console.log("Casey".length);





























































