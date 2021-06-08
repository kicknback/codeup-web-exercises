(function(){
    "use strict";

    // TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can
    //  be accepted as values

    // {
    //     "hobby": "hanging out with kids",
    //     "the best?": true,
    //     "location": ["the park", "the house", "the couch"],
    //     "frequency": 8,
    //     "who": [{
    //         girl: true,
    //          youngest: true,
    //     }, {
    //         boy: true,
    //         oldest: true
    //     }]
    // }

    // console.log($.ajax("https://jsonplaceholder.typicode.com/comments"));
    //
    // $.ajax("https://jsonplaceholder.typicode.com/comments", {
    //     type: "POST",
    //     data: {
    //         title: "my trip to Antartica",
    //         article: "lorem ipsum blah blah blah."
    //     }
    // })

    // TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.

    // console.log($.ajax("https://jsonplaceholder.typicode.com/comments"));

    // TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully

    console.log($.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "POST",
        data: {
            "userId": 11,
            "id": 101,
            "title": "blaaaaaaah",
            "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
        }
    }));

    // TODO: what status do you get back when making a GET request to: https://jsonplaceholder.typicode.com/cmments

    console.log($.ajax("https://jsonplaceholder.typicode.com/cmments"));

})()