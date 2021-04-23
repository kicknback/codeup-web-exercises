(function(){
    "use strict";

    function showMultiplicationTable(num) {
        if (num === 0) {
            return 0;
        }
        for (let i = 1; i <= num; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
    }

    showMultiplicationTable(9);

    //let ranNum = Math.floor(Math.random() * (200 - 20)) + 20;
    //console.log(ranNum);

    // for (let i = 1; i <= 10; i++) {
    //     let ranNum = Math.floor(Math.random() * (200 - 20)) + 20;
    //     if (ranNum % 2 === 0) {
    //         console.log(`${ranNum} is even`);
    //     } else {
    //         console.log(`${ranNum} is odd`);
    //     }
    // }

    // for (let i = 1; i <= 9; i++) {
    //     console.log((i.toString().repeat(i)));
    // }


    // for (let i = 100; i > 0; i-=5) {
    //     console.log(i);
    // }




})()