(function(){
    "use strict";

    let trim = input => {
        return input.trim();
    }

    //console.log(trim("    oiwne   "));

    //----------------------------

    let cube = num => num**3;

    let cubeRoot = num => Math.cbrt(num);

    console.log(cube(3));
    console.log(cubeRoot(27));
    console.log(cubeRoot(cube(3)));

    //-----------------------------


})()