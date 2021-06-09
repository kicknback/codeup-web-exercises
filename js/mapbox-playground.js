const mapboxToken = "pk.eyJ1Ijoia2lja25iYWNrIiwiYSI6ImNrcHBuOWEwcjJveTIydXBlYzI0M2ttYjcifQ.XQ3-Mc4BInwSCGwala81DA"

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [-97.1081, 32.7357],
    zoom: 12
});

let marker = setMarker([-97.1081, 32.7357]);
addMapEvent(marker);

function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point).addTo(map);

}

function addMapEvent(marker) {
    map.on('click', function(e){
        marker.setLngLat(e.lngLat).addTo(map);
        console.log(e.lngLat);
    })
}