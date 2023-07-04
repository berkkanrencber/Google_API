import { sendRequest } from "../send-request.js";

let selectedLat;
let selectedLng;
let selectedPlaceId;
let marker;
let infoWindow;

function initMap() {
    const myLatlng = { lat: 40.99, lng: 29.07 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: myLatlng,
    });

    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
      if(marker != null){
        marker.setMap(null);
      }
      selectedLat = mapsMouseEvent.latLng.toJSON().lat;
      selectedLng = mapsMouseEvent.latLng.toJSON().lng;
      
      console.log(mapsMouseEvent.latLng.toJSON().lat + " " + mapsMouseEvent.latLng.toJSON().lng);
      let url = `http://localhost:8080/get/place?lat=${selectedLat}&lng=${selectedLng}`
      sendRequest(url,'GET')
      .then(data => {
        document.getElementById('autocomplete').value = data.result.formatted_address;
        selectedPlaceId = data.result.place_id;
        placeMarker(mapsMouseEvent.latLng, map);
        
        infoWindow = new google.maps.InfoWindow({
          content: data.result.formatted_address
        });

        marker.addListener("click", () => {
          infoWindow.open({
            anchor: marker,
            map,
          });
        });
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      })
    });
}

function getMarkedPlaceId(){
  return selectedPlaceId;
}

function placeMarker(position, map){
  marker = new google.maps.Marker({
    position: position, 
    map: map,
  });
}

export {
  getMarkedPlaceId
};

window.initMap = initMap;