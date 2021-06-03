(function(){
    "use strict";

    let button = $(".btn");
    let input = $(".form-control");
    let container = $("#post-container");

    button[0].addEventListener("click", myFunction);

    function myFunction() {
        let newDiv = document.createElement("div");
        // newDiv.setAttribute("class", "col-12");
        let newGif = document.createElement("img");
        newGif.setAttribute("src", "images/braveheart.webp")
        newDiv.append(newGif);
        container.append(`<div class="" style="font-weight: bold; font-size: 30px">${input[0].value}</div>`);
        container.append(newDiv);
        button[0].removeEventListener("click", myFunction);
    }



})()