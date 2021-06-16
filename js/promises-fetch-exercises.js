
fetch("https://dog.ceo/api/breeds/image/random").then(message => {
    console.log(message)
    return message.json();
}).then(data => {
    $("#random-dog-image").attr("src", data.message);

})
    .catch(err => console.log(`There was an error of: ${err}`));

// create a second GET request to return the blog post with an id of 11 and display that blog post on the dom.
fetch('https://jsonplaceholder.typicode.com/posts') // make a request - GET
    .then(response => response.json())
    .then(data =>{
        // console.log(data);
        // console.log(data[10].id);
        $("#blog-title").append(data[10].title);
        $("#blog-post").append(data[10].body);
        return data[10].id;
    }).then(data => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${data}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.name);
            let bucket = $(".container");
            data.forEach((ele, index) => {
                bucket.append(`
                        <p>${data[index].name}</p>
                        <p>${data[index].body}</p>
                    `);
            })
        })
    })
     // we have the data in json format, now we can manipulate it
    .catch(error => {
        console.log(error);
        console.error(error);
    });
