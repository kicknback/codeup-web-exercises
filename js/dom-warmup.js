(function(){
    "use strict";

    let button = $(".btn");
    let input = $(".form-control");
    let container = $("#post-container");

    button.addEventListener("click", function(){
        container.append(input[0].textContent)
    });



})()