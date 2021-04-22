(function(){
    "use strict";
    let num = 8;
    while (num <= 10) {
        console.log('num: ' + num);
        num += 1;
        console.log("num plus one:" + num);
    }

    // // TODO: MINI EXERCISES
    // // TODO: print all even numbers between 0 and 25;
    // // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
    // // correct password is given.
    // hint: start by defining the correct password and don't forget to link your html file


    let numIter = 0;
    while (numIter < 25) {
        if (numIter % 2 === 0) {
            console.log("Even number: " + numIter);
        }
        numIter++;
    }

    let correctPass = 'blahblah';

    while (true) {
        let pass = prompt("What is the password?");
        if (pass === correctPass) {
            alert("That is the correct password.  You are now allowed in...");
            break;
        } else {
            alert("That was not the proper password");
        }
    }





})()