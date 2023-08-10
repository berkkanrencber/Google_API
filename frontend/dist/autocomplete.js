import { sendRequest } from "../send-request.js";
import { setCenterOfMap } from "./geocoding.js";

let selectedLocationLatLng = {};
let selectedLocationId;
let resultBox = document.getElementById('result-box');
let inputBox = document.getElementById('autocomplete');
inputBox.addEventListener('input', onChangeLocation);

function onChangeLocation(){
  var location = document.getElementById('autocomplete').value;
  let URL = "http://localhost:8080/get/autocomplete?input=" + location;

  sendRequest(URL, 'GET')
        .then(data => {   
            displayResults(data.predictions);
        })
        .catch(err => {
            console.error(err)
        })
}

function displayResults(result) {

  const ul = document.createElement('ul');
  ul.className= "menu bg-base-200 w-100 rounded-box";
    for (let i = 0; i < result.length; i++) {
        const li = document.createElement('li');
        const aTag = document.createElement('a');
        aTag.textContent = result[i].description;
        aTag.onclick = () => {
          console.log(result[i])
          selectInput(result[i].description);
          setSelectedLocationId(result[i].place_id);
          let URL = `http://localhost:8080/get/location?place_id=${result[i].place_id}`
          sendRequest(URL, 'GET')
            .then(data => {
              selectedLocationLatLng.lat = data.lat;
              selectedLocationLatLng.lng = data.lng;
              setCenterOfMap(selectedLocationLatLng,12)
            })
            .catch(err => {
              console.error(err)
            })
        }
        li.appendChild(aTag);
        ul.appendChild(li);
    }

    resultBox.innerHTML = '';
    resultBox.appendChild(ul);
}

function selectInput(list) {
  inputBox.value = list;
  resultBox.innerHTML = '';
}

function setSelectedLocationId(id){
  selectedLocationId = id;
}

export function getLocationId(){
  return selectedLocationId;
}

export function getLocationLatLng(){
  return selectedLocationLatLng;
}