(function(){
    "use strict";
    let patt = /\d+/gi;
    while (true) {
        var askForOddNum = prompt("Please enter an odd number between 1 and 50...");
        if (patt.test(askForOddNum) === true && askForOddNum % 2 !== 0 && askForOddNum < 50) {
            break;
        }
    }
    console.log(`Number to skip is: ${askForOddNum}`);

    for (let i = 0; i <= 50; i++) {
        if (i == askForOddNum) {
            console.log(`Yikes!  Skipping number: ${askForOddNum}`);
            continue;
        } else if (i % 2 !== 0) {
            console.log(`Here is an odd number: ${i}`);
        }
    }



})()