import { sendRequest } from "../send-request.js";


let selectedLat;
let selectedLng;
let selectedPlaceId;
let marker;
let infoWindow;
let placeInfoWindow;
let map;


function initMap() {
    const myLatlng = { lat: 40.99, lng: 29.07 };
    map = new google.maps.Map(document.getElementById("map"), {
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
      
      let url = `http://localhost:8080/get/place?lat=${selectedLat}&lng=${selectedLng}`
      sendRequest(url,'GET')
      .then(data => {
        document.getElementById('autocomplete').value = data.result.formatted_address;
        selectedPlaceId = data.result.place_id;
        placeMarker(mapsMouseEvent.latLng);
        
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

function placeMarker(position){
  marker = new google.maps.Marker({
    position: position, 
    map,
  });
}

function placeMarkerFromMap(place_name,position){
  marker = new google.maps.Marker({
    position: position, 
    map,
  });
  marker.addListener("click", () => {
        marker.title = place_name;
        marker.setPosition(position);
        infoWindow.close();
        infoWindow.setContent(marker.title);
        infoWindow.setPosition(marker.position);
        infoWindow.open({
          anchor: marker,
          map,
        })
  });
  
}


export {
  getMarkedPlaceId,
  placeMarkerFromMap,
};

window.initMap = initMap;