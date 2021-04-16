"use strict";

function getKindOfDog() {
    return prompt("What kind of dog is it?");
}


function getContactInfo() {
    return prompt("How do I contact you when I find the dog?");
}


function getDogName() {
    return prompt("What is your dog's name?");
}



function playTheGreatEscape() {
    // get all the info
    let dogKind = getKindOfDog();
    let dogName = getDogName();
    let contactInfo = getContactInfo();
    alert("Time to search for this doggo!");
    alert("I see a dog!");
    let dogSeen = getKindOfDog();
    let isLostDog = (dogSeen === dogKind) && confirm("Does dog respond to the name: " + dogName);
    if (isLostDog) {
        alert("Puts leash on " + dogName);
        alert("Time to call the owner!");
        alert("Calling: " + contactInfo);
        alert("Taking the dog to their worried owner...");
    }
}

playTheGreatEscape();