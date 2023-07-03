let selectedLat;
let selectedLng;

function initMap() {
    const myLatlng = { lat: 40.99, lng: 29.07 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: myLatlng,
    });
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to get Lat/Lng!",
        position: myLatlng,
    });

    infoWindow.open(map);
    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
      // Close the current InfoWindow.
      infoWindow.close();
      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );
      infoWindow.open(map);
      selectedLat = mapsMouseEvent.latLng.toJSON().lat;
      selectedLng = mapsMouseEvent.latLng.toJSON().lng;
      console.log(mapsMouseEvent.latLng.toJSON().lat + " " + mapsMouseEvent.latLng.toJSON().lng);
    });
}
  
function getLat(){
    return selectedLat;
}

function getLng(){
    return selectedLng;
}

export {
    getLat, getLng
};

window.initMap = initMap;