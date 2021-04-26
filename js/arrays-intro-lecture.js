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




})()