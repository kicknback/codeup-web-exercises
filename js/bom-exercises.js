(function(){
    "use strict";
    //TODO: This program will run indefinitely. To finish coding this program, you’ll need to stop the setInterval() method after the showTime() function has run five times.
    //Save setInterval function to a variable
    //Pass the variable into the clearInterval function to stop the interval
    //Hint (It may be helpful to create an if statement



    // let count = 0;
    // function showTime() {
    //     // return new date and time
    //     let dateTime= new Date();
    //     // return the time
    //     let time = dateTime.toLocaleTimeString();
    //     count += 1;
    //     //if the count reaches 5, stop the program.
    //     if (count > 5) {
    //         clearInterval(display);
    //     }
    //     console.log(time)
    // }
    // let display = setInterval(showTime, 5000);


    // let count = 0;
    //
    // let greet = () => {
    //     console.log("Hello World!");
    // }
    //
    // setTimeout((greet, 3000));




    //TODO: Write a function called showTime() that logs the current time after six seconds. To return a new date and time, save the results of new Date() to a variable. Example let dateTime = new Date();

    let showTime = () => {
        let  thisDate = new Date().toLocaleTimeString();
        console.log(thisDate);
    }
    // let timer = setInterval(showTime, 6000);
    // clearInterval(timer);

})()