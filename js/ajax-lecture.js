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

    console.log($.ajax("https://jsonplaceholder.typicode.com/comments"));

    $.ajax("https://jsonplaceholder.typicode.com/comments", {
        type: "POST",
        data: {
            title: "my trip to Antartica",
            article: "lorem ipsum blah blah blah."
        }
    })


})()