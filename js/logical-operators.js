"use strict";

// I want a toutine which will detemine if a dog is infact my dog
// The dog must have fur, have whiskers, and have a name


let hasFur = true;
let hasWhiskers = true;
let nameIsCoda = true;

let isMyDog;

if (hasFur) {
    isMyDog = true;
}

if (hasWhiskers) {
    isMyDog = true;
}

if (nameIsCoda) {
    isMyDog = true;
    console.log("This must be my Coda!");
}

//--- &&

if (hasFur) {
    if (hasWhiskers) {
        if (nameIsCoda) {
            console.log("Who's a good girl??")
        }
    }
}

if (hasFur && hasWhiskers && nameIsCoda) {
    console.log("Who's a good girl??");
}

// --- ||

let creditScore = 720;
let cashOnHand = 3000;

if (creditScore > 680 || cashOnHand > 3000) {
    console.log("Congrats! You (the bank) now own a car!");
}

let hasRequiredScoreOrCash = (creditScore > 680) || (cashOnHand > 3000);

let lengthOfEmployment = 6;

let hasAdequateLenghtOfEmployment = (lengthOfEmployment >= 6);
let purchasedCar;

if (hasRequiredScoreOrCash && hasAdequateLenghtOfEmployment) {
    console.log("Ok, for real.  You get a car");
    purchasedCar = true;
}

if(purchasedCar) {

}

// --------  Logical not

console.log("The inverted value is: " + !0);







































