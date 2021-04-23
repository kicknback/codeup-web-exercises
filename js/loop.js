(function(){
    "use strict";
    // let num = 8;
    // while (num <= 10) {
    //     console.log('num: ' + num);
    //     num += 1;
    //     console.log("num plus one:" + num);
    // }

    // // TODO: MINI EXERCISES
    // // TODO: print all even numbers between 0 and 25;
    // // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
    // // correct password is given.
    // hint: start by defining the correct password and don't forget to link your html file


    // let numIter = 0;
    // while (numIter < 25) {
    //     if (numIter % 2 === 0) {
    //         console.log("Even number: " + numIter);
    //     }
    //     numIter++;
    // }
    //
    // let correctPass = 'blahblah';
    //
    // while (true) {
    //     let pass = prompt("What is the password?");
    //     if (pass === correctPass) {
    //         alert("That is the correct password.  You are now allowed in...");
    //         break;
    //     } else {
    //         alert("That was not the proper password");
    //     }
    // }
    // //------- do while loop
    //
    // // sing happy bday every year and when they reach 16 say "i got you a car"
    //
    // let age = 0;
    //
    // do {
    //     console.log(`Happy bday! You're now ${age} years old`);
    //     age++
    // }

    // // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
    //  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
    //  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
    //  is now full" to the console.
    //  HINT: think of a countdown, remember if statements can be used inside of your statements

    // let availSpaces = 30;
    //
    // do {
    //     console.log(`There are currently ${availSpaces} spaces available in our parking lot.`);
    //     availSpaces -= 2;
    // } while (availSpaces !== 0);
    //
    // console.log("--This parking lot is now full--");


    // -------- for loop mini exercises


    // TODO: Loop through a set of numbers (0-30), if the number you're currently at is even, add 2 to it. If it's an
    //  odd number, print "odd"
    // // HINT: remember the remainder operator (modulo)
    //
    // for (let i = 0; i <= 30; i++) {
    //     if (i % 2 === 0) {
    //         console.log(i + 2);
    //     } else {
    //         console.log("odd");
    //     }
    // }

    // // TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
    //  If it's neither print "I'm not playing"
    //  Print "marco polo" if it's divisible by 3 and 5.

    for (let i = 1; i <= 40; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Marco Polo");
        } else if (i % 3 === 0) {
            console.log("Marco");
        } else if (i % 5 === 0) {
            console.log("Polo");
        } else {
            console.log("I'm not playing");
        }
    }

})()