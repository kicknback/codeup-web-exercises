// //make sure the DOM is loaded first
// document.addEventListener("DOMContentLoaded", function() {
//     addListeners();
// });
// //parent method for adding all listeners
// function addListeners(){
//     //get the elements to add listener and change image
//     let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
//     addEvents(cardContainers, 'images/jazz-music-rubber-duck.jpg', 'mouseover');
//     addEvents(cardContainers, 'images/question.png', 'mouseout');
// }
// //add mouseover/mouseout events to all selected elements
// function addEvents(cardContainers, imgPath, listenerType){
//     cardContainers.forEach((cc) => {
//         let card = cc;
//         //create listener which will call function change the image
//         let listener = function (event) {
//             let cardImg = card.querySelector(".card .card-img-top");
//             changeImage(cardImg, imgPath);
//         };
//         cc.addEventListener(listenerType, listener);
//     });
// }
// //actual function to swap images
// function changeImage(card, imgPath){
//     card.setAttribute('src', imgPath);
// }
//

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//make sure the DOM is loaded first
// $(document).ready(addListeners);
//
// function addListeners() {
//     let ducky = "images/jazz-music-rubber-duck.jpg";
//     let question = "images/question.png";
//     let cardContainers = $(".col-md-3");
//     let cardImage = $(".card-img-top");
//
//     function hoverIn(e) {
//         $(this).find(cardImage).attr("src", ducky);
//     }
//     function hoverOut(e) {
//         $(this).find(cardImage).attr("src", question);
//     }
//     cardContainers.hover(hoverIn, hoverOut);
// }

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // TODO: When the user clicks the button with the id of 'submitBtn,' the background color of #override-bootstrap changes to 'red'
//
// $("#submitBtn").click(function (){
//     $("#override-bootstrap").css("background-color", "red");
// })
//
// // TODO: When the user clicks a .card-text element, change its background color to 'red'
//
// $(".card-text").click(function(){
//     $(this).css("background-color", "red");
// })
//
// // TODO: Add a new button to the html, directly below the first button. Give it an id of 'resetBtn'.
// // -> When the user clicks that button, the page should reload. (HINT: BOM has a super easy method for reloading the page. You'll still need a click event)
//
// $("#resetBtn").click(function(){
//     location.reload();
// })
//
// // TODO: When the user clicks the element with the id #main-title, its text font size doubles
//
// $("#main-title").click(function(){
//     $(this).css("font-size", "400%");
// })

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// TODO: Add a data-attribute to each card container (.col-md-3)
//  -> Give that data-attribute a value of 1-4 (moving top to bottom in the html)
//  -> Now, when a user hovers over one of the .col-md-3 containers, you should replace the text inside #card-title with the data-attribute value
//  -> When the user hovers out, the data-attribute value should be replaced with the original text ("Card")

let hoverIn = () => {
    $(this).find(".card-title").text($(this).attr("data-attr"));
}

let hoverOut = () => {
    $(this).find(".card-title").text("Card");
}

$(".col-md-3").hover(hoverIn, hoverOut);

// TODO: When an li with the .list-group-item class is clicked, replace the text with the same text, but uppercased
//  -> ALSO, change the background of the li to a new color
//  -> When the li is clicked again, reset the li background color to its original color
//      -> Don't worry about changing the text back

$(".list-group-item").click(function(){
    $(this).toggleClass("text-uppercase");
    $(this).toggleClass("bg-danger");
})



