
// $.ajax({
//     url: "http://api.openweathermap.org/data/2.5/weather",
//     type: "GET",
//     data: {
//         APPID: OPEN_WEATHER_TOKEN,
//         // q: "Kyle, TX, US"
//         lat: 29.99144536394676,
//         lon: -97.87487019696017,
//         units: "imperial"
//     },
//     success: function (data) {
//         console.log(data);
//     }
//
// })

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast",
    type: "GET",
    data: {
        APPID: OPEN_WEATHER_TOKEN,
        // q: "Kyle, TX, US"
        lat: 29.99144536394676,
        lon: -97.87487019696017,
        units: "imperial"
    },
    success: function (data) {
        console.log(data);
    }
})