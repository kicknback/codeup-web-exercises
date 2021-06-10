
mapboxgl.accessToken = MAPBOX_TOKEN;

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [-97.1081, 32.7357],
    zoom: 12
});

let marker = setMarker([-97.1081, 32.7357]);
addMapEvent(marker);

// let geocoder = (function (){
//
// })();

let geocoder = setGeoCoder();
addGeoCoderToMap(geocoder);
addGeoCoderEvent(geocoder);
setPopUp("Poppin poppers");

function setGeoCoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

function addGeoCoderToMap(geocoder) {
    map.addControl(geocoder);
}
function addGeoCoderEvent(geocoder) {
    geocoder.on("result", function (e){
        console.log(e);
        marker.setLngLat(e.result.geometry.coordinates);
        setPopUp(e.result.place_name);
    })
}

function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point).addTo(map);

}

function addMapEvent(marker) {
    map.on('click', function(e){
        marker.setLngLat(e.lngLat).addTo(map);
        console.log(e.lngLat);
    })
}

function setPopUp(textDetails) {
    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);
    marker.setPopup(popup);
}