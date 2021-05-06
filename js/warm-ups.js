(function(){
    "use strict";

    let trim = input => {
        return input.trim();
    }

    //console.log(trim("    oiwne   "));

    //----------------------------

    let cube = num => num**3;

    let cubeRoot = num => Math.cbrt(num);

    // console.log(cube(3));
    // console.log(cubeRoot(27));
    // console.log(cubeRoot(cube(3)));

    //-----------------------------

    let last = input => input[input.length - 1];

    //console.log(last("fkvnseilrgheiurghsklhv"));

    //------------------------------

    let remainder = (number, divisor) => {
        if (!parseInt(number)) {
            return "The number argument is not a number";
        } else if (!parseInt(divisor)) {
            return "The divisor argument is not a number";
        } else {
            return number % divisor;
        }
    }

    console.log(remainder("84", 9));

    //------------------------------

})()