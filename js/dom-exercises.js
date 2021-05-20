(function(){
    "use strict";

    // // TODO: build a simple 2 x 3 grid using bootstrap and give each
    //  item a unique border color. Give any three of those of those divs a
    //  blue background-color. Place a paragraph tag inside of all 6 divs
    //  (use lorem). Four of the six paragraphs should have dark-green font
    //  color
    // TODO: print the following items to the console: 1) A node that
    //  represents a div/item with a red border. 2) an array of elements
    //  whose text is dark-green. 3) an array of all paragraph elements

    let redBorder = document.getElementById("red-border")
    let greenItems = document.getElementsByClassName("dark-green");
    let paras = document.getElementsByTagName("p");

    // console.log(redBorder);
    // console.log(greenItems);
    // console.log(paras);

    let newDiv = document.createElement("div");
    let newElement = document.createElement("ul");

    newDiv.innerText = "Creating a new div";
    // console.log(newDiv);

    for (let i = 0; i <= 4; i++) {
        newElement.appendChild(document.createElement("li"));
    }
    console.log(newElement);
    // console.log("%cMy new element is ", "color: red; font-weight: bold; text-decoration: underline");

    // newElement.innerText = "New list";
    // newElement.innerHTML = "<p>Howdy there</p>";

    let domDiv = document.getElementsByClassName("container-fluid");
    let body = document.getElementsByTagName("body");
    body[0].appendChild(newElement);



    // TODO: change the text inside of 1 of the paragraphs to be a short paragraph about you
    // TODO: log the second paragraph element from the list of all
    //  paragraphs
    // TODO: create a new ul element and 5 new li elements. Each of your li's should have some text inside of it
    // TODO: replace the last div's paragraph with your new ul. make sure the ul has all 5 li's inside of it
    // TODO: remove the last li

    let innerDiv = document.getElementsByClassName("col border dark-green");
    console.log(innerDiv);
    innerDiv[0].innerHTML = `<p>This is the new paragraph about me.  I'm awesome</p>`;
    console.log(document.getElementsByTagName("p")[1]);


    let items = newElement.getElementsByTagName("li");
    items[0].innerText = "Pizza";
    items[1].innerText = "Pasta";
    items[2].innerText = "Mac";
    items[3].innerText = "Cous Cous";
    items[4].innerText = "Bread";

    innerDiv[3].innerHTML = newElement.innerHTML;

    let childLis = innerDiv[3].getElementsByTagName("li");  //removeChild(items[4]);
    let delChild = childLis[4];
    innerDiv[3].removeChild(delChild);

})()