(function(){
    "use strict";

    // []

    // let myArr = ["dog", "cat", "fish"]; //<- each comma-delimited value is an 'element'
    // console.log(Array.isArray(myArr));

    // let myCharacteristics = ["Casey", "Software Engineer", "31"];
    //
    // console.log("The length of the array is: " + myCharacteristics.length);
    //
    // console.log(myCharacteristics[0]);
    //
    // console.log(`Hello, I am a ${myCharacteristics[1]} named ${myCharacteristics[0]}`);

    // TODO: Make a new array which holds elements based on your own characteristics
    //  -> In a console.log, output a string which describes yourself based on those elements
    //  -> KEEP IN MIND ZERO-INDEXING!

    let meArray = ["Josh", "Software Engineer", "34"];
    //console.log(`Hi, my name is ${meArray[0]} and I'm a ${meArray[1]} who is ${meArray[2]} years old`);

    // meArray[0] += " Borreli";
    // console.log(meArray[0]);
    //
    // for (let i = 0; i < 10; i++) {
    //     // do something with one array element
    //
    // }

    let myPets = ["Coda", "Murphy", "Hondo", "Buddy"];

    // for (let i = 0; i < myPets.length; i++) {
    //     console.log(myPets[i]);
    // }

    // TODO: MINI-EXERCISE
    //  -> Create an array with at least 5 elements, describing whatever you'd like!
    //  -> Create a loop which will log each element to the console
    //  -> Wrap that loop in a function which has an array parameter
    //  -> Call the function and pass in your array as the argument
    //  -> DID YOU KNOW: You can add different data types to an array??
    //      -> Try adding strings, numbers, or booleans as elements



    myPets.forEach(function(pet) {
        console.log("My pet's name is: " + pet);
    })


                // -------------- manipulating arrays

    // TODO: MINI-EXERCISE
    //  -> var days = ["Monday", "Tuesday", "Wednesday"];
    //  -> Create an array with the remaining days of the week
    //  -> Call .forEach() on that NEW array
    //  -> Inside the inline function you pass into .forEach():
    //      -> add the remainingDay of the week to the old array
    //  -> When the loop completes, console.log() the completed day of the week array

    // var days = ["Monday", "Tuesday", "Wednesday"];
    // let otherDays = ["Thursday", "Friday", "Saturday", "Sunday"];
    // //console.log(days);
    //
    // otherDays.forEach(function(day) {
    //     days.push(day);
    // })
    //
    // console.log(days);

    // TODO - MINI EXERCISE
    //  -> Let's reverse engineer our days of the week array
    //  -> Make sure to console.log in order to see your code's behavior!
    //  -> Write a function which takes in your complete days of the week array
    //      -> It will eventually return your reverse-engineered array
    //  -> Using a FOR LOOP (not .forEach())
    //      -> pop() each item off the days array
    //      -> use the returned value from pop() to unshift the element
    //      -> on to the new array
    //  -> HINT: You may find that the loop doesn't behave as expected
    //      -> console.log EVERY possible thing which could change as your loop runs
    //          -> consider how the methods you are using change state of the array


    // function revEng(arr) {
    //     let newArr = [];
    //     let arrLength = arr.length;
    //     for (let i = 1; i <= arrLength; i++) {
    //         //console.log(days);
    //         console.log("----------------");
    //         newArr.unshift(arr.pop());
    //         console.log(arr.length);
    //         console.log(newArr.length);
    //     }
    //     console.log(arr);
    //     console.log(newArr);
    // }
    //
    // revEng(days);

    // ----------------------------

    // function sortMyNums(num1, num2, num3) {
    //     let numArray = [num1, num2, num3];
    //     console.log(numArray);
    //     numArray.sort(function(a, b){
    //         console.log(a);
    //         console.log(b);
    //         console.log(a - b);
    //         return a - b;
    //     });
    //     console.log(numArray);
    //     return numArray;
    // }
    //
    // sortMyNums(13, 1, 1009);

    // -----------------------------

    function giveMissyJustice(notASuspectString) {
        let musicalGenius = notASuspectString.split("");
        console.log(musicalGenius);
        musicalGenius.reverse();
        let reversedString = musicalGenius.join(" ");
    }

    giveMissyJustice("i put my string down, flip it and reverse it");








})()