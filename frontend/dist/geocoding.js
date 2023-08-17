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

const refreshMap = document.querySelector('#button-reload-map');
refreshMap.addEventListener("click", ()=>{
  initMap();
})

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

function placeMarkerFromMap(place_name,position,place_address,place_user_total_rating,int){
  let html=`<div id="content"><div id="siteNotice"></div>
  <h1 id="firstHeading" class="firstHeading"><strong>${place_name}</strong></h1><div id="bodyContent">
  <p>${place_address}</p><p>User Total Rating: ${place_user_total_rating}</p></div></div>`
  infoWindow = new google.maps.InfoWindow({
    content: html
  });
  marker = new google.maps.Marker({
    position: position, 
    map,
  });
  markers.push(marker);
  marker.addListener("click", () => {
        marker.title = place_name;
        marker.setPosition(position);
        if(infoWindow && int!=1){
          infoWindow.close();
          infoWindow.setContent(html);
          infoWindow.setPosition(marker.position);
          infoWindow.open({
            anchor: marker,
            map,
          })
        }
        if(int==1){
          infoWindow.close();
          infoWindow.setContent(html);
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