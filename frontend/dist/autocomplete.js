import { sendRequest } from "../send-request.js";

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
          selectInput(result[i].description);
          setSelectedLocationId(result[i].place_id);
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