
fetch("https://dog.ceo/api/breeds/image/random").then(message => {
    console.log(message)
    return message.json();
}).then(data => {
    $("#random-dog-image").attr("src", data.message);

})
    .catch(err => console.log(`There was an error of: ${err}`));
