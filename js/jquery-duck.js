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
$(document).ready(addListeners);

function addListeners() {
    let ducky = "images/jazz-music-rubber-duck.jpg";
    let question = "images/question.png";
    let cardContainers = $(".col-md-3");
    let cardImage = $(".card-img-top");

    function hoverIn(e) {
        $(this).find(cardImage).attr("src", ducky);
    }
    function hoverOut(e) {
        $(this).find(cardImage).attr("src", question);
    }
    cardContainers.hover(hoverIn, hoverOut);
}


