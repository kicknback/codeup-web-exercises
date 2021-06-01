(function(){
    "use strict";

    // $("selector").methods(any arguments required);

    // $("h1")  -- select by tag name
    // $("#change-text") -- select by id
    // $(".lead") -- select by class


    $("#all-caps").hide();
    $("span").hide();
    $(".show-me").show();

    // selecting children elements
    $("body").children();

    $(".pink").css("background-color", "pink");
    $(".orange").css("background-color", "orange");
    window.onload = function() {
        $(".pink").hide();
    }
    $(document).ready(function(){
        $(".orange").hide();
    })


})()