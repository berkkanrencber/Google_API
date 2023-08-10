import { sendRequest } from "../send-request.js";


let selectedLat;
let selectedLng;
let selectedPlaceId;
let selectedLatLng={};
let marker;
let infoWindow;
let placeInfoWindow;
let map;
let markers=[];


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
      selectedLatLng.lat=selectedLat;
      selectedLatLng.lng=selectedLng;
      
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

function setCenterOfMap(position,zoom){
  console.log("setCenterOfMap")
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: zoom,
    center: position,
  });
}

function setCenterOfMapClick(zoom){
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: zoom,
    center: selectedLatLng
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
  infoWindow = new google.maps.InfoWindow({
    content: place_name
  });
  marker = new google.maps.Marker({
    position: position, 
    map,
  });
  markers.push(marker);
  marker.addListener("click", () => {
        marker.title = place_name;
        marker.setPosition(position);
        if(infoWindow){
          infoWindow.close();
          infoWindow.setContent(marker.title);
          infoWindow.setPosition(marker.position);
          infoWindow.open({
            anchor: marker,
            map,
          })
        }
        
  });
  
}

function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function hideMarkers() {
  setMapOnAll(null);
}

function deleteMarkers(){
  hideMarkers();
  markers=[];
}


export {
  getMarkedPlaceId,
  placeMarkerFromMap,
  deleteMarkers,
  setCenterOfMap,
  setCenterOfMapClick
};

window.initMap = initMap;