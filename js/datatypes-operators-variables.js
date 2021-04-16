"use strict";

var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
console.log(c);

var d = "hello";
var e = false;

d++;
console.log(d);
e++;
console.log(e);

var perplexed; // perplexed is undefined (no value is assigned)
console.log(perplexed + 2);

var price = 2.7;
console.log(price.toFixed(2));

var price = "2.7";
//console.log(price.toFixed(2));

console.log(isNaN(0));
console.log(isNaN(1));
console.log(isNaN(""));
console.log(isNaN("string"));
console.log(isNaN("0"));
console.log(isNaN("1"));
console.log(isNaN("3.145"));
console.log(isNaN(Number.MAX_VALUE));
console.log(isNaN(Infinity));
console.log(isNaN("true"));
console.log(isNaN(true));
console.log(isNaN("false"));
console.log(isNaN(false));

// to illustrate why the isNaN() function is needed:
console.log(NaN == NaN);
console.log("=========================================")
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);
console.log(!!0);
console.log(!!-0);
console.log(!!1);
console.log(!!-1);
console.log(!!0.1);
console.log(!!"hello");
console.log(!!"");
console.log(!!'');
console.log(!!"false");
console.log(!!"0");
console.log("=========================================")

let sample = "Hello Codeup";

console.log(sample.length);
console.log(sample.toLowerCase());
console.log(sample += " " + "Students");
console.log(sample.replace("Students", "Class"));
console.log(sample.indexOf("c"));
console.log(sample.indexOf("C"));
console.log(sample.substring(sample.indexOf("C"), (sample.indexOf("p") + 1)));
console.log("=========================================")

let mermaid = 3;
let bear = 5;
let herc = 1;

let pricePerDay = 3.00;
console.log("The total cost of the movies is: " + "$" + ((mermaid * pricePerDay) + (bear * pricePerDay) + (herc * pricePerDay)));
console.log("\n");

let google = 400.00;
let amazon = 380.00;
let facebook = 350.00;

console.log("Total contract payments for the week are: " + "$" + ((google * 6) + (amazon * 4) + (facebook * 10)));
console.log("\n");

let notFull = true;
let noConflict = true;

if (notFull && noConflict) {
    console.log("She can be enrolled!");
} else {
    console.log("Enrollment not possible at this time.");
}
console.log("\n");

let premium = false;
let itemsBought = 3;
let offerExpired = true;

if (!offerExpired && itemsBought > 2 || premium) {
    console.log("Offer applied!");
} else {
    console.log("Get outta here!");
}
console.log("=========================================")

let username = 'codeup';
let password = 'notastrongpassword';

let atLeast5 = password.length >= 5;
let noUsername = !password.includes(username);
let noMoreThan20 = username.length <= 20;
let noWhitespace = (username[0] !== " "
    && username[-1] !== " "
    && password[0] !== " "
    && password[-1] !== " ");


console.log(atLeast5);
console.log(noUsername);
console.log(noMoreThan20);
console.log(noWhitespace);









