(function(){
    "use strict";

    // let num = 2;
    // while (num < 66000) {
    //     console.log(num);
    //     num *= 2;
    // }
    // do while exercise

    let coneStock = Math.floor(Math.random() * 50) + 50;
    console.log(`The amount of cones we need to sell today is ${coneStock}`);

    do {
        console.log(`We have ${coneStock} ice cream cones left in inventory`);
        let conesToBuy = Math.floor(Math.random() * 5) + 1;
        console.log(`I'll take ${conesToBuy} ice cream cones, please`)
        if (conesToBuy > coneStock) {
            console.log(`Sorry, can't sell you that many cones because I only have ${coneStock} left`);
        } else {
            console.log(`Here are your ${conesToBuy} cones`);
            coneStock -= conesToBuy;
        }
        console.log("\n---------------------------\n")
    } while (coneStock !== 0);
    console.log(`Sweet!! sold all my cones and I'm outta here...`);

})()