import { sendRequest } from "../send-request.js";
import { setCenterOfMap } from "./geocoding.js";

let selectedLocationLatLng = {};
let selectedLocationId;
let resultBox = document.getElementById('result-box');
let inputBox = document.getElementById('autocomplete');
//inputBox.addEventListener('input', onChangeLocation);
inputBox.addEventListener('blur',()=>{ setTimeout(() => { resultBox.innerHTML="" }, 200); });
inputBox.addEventListener('click', searchLocations );
inputBox.addEventListener('focus', ()=>{ 
  if(inputBox.value!="")
    resultBox.innerHTML=resultBoxHtml 
});
let resultBoxHtml="";
let tempLocation="";
let searchProcess=true;
let clikedOneOfResult=false;
let firstClick=false;

function searchLocations(){
  if(!firstClick){
    firstClick=true;
    clikedOneOfResult=false;
    searchProcess=true;
    var location = document.getElementById('autocomplete').value;
    let URL = "http://localhost:8080/get/autocomplete?input=" + location;
    tempLocation=location;
    setInterval(() => {
      location = document.getElementById('autocomplete').value;
      URL = "http://localhost:8080/get/autocomplete?input=" + location;
      if(!clikedOneOfResult){
        if(location!="" && location.length%2==0 && location.length!=0 && searchProcess==true){
          sendRequest(URL, 'GET')
          .then(data => {   
              displayResults(data.predictions);
              searchProcess=false;
          })
          .catch(err => {
              console.error(err)
          })
        }else if(location!=tempLocation){
          searchProcess=true;
        }
      }
      
      tempLocation=location;
    }, 1000);
  }
  
}

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
          clikedOneOfResult=true;
          searchProcess=false;
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
    resultBoxHtml=resultBox.innerHTML;
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