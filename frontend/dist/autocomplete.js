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
            console.log(JSON.stringify(data.predictions));
            displayResults(data.predictions);
        })
        .catch(err => {
            console.error(err)
        })

  console.log(location);
}

function displayResults(result) {

  const ul = document.createElement('ul');

    for (let i = 0; i < result.length; i++) {
        const li = document.createElement('li');
        li.className = "list-none rounded-sm py-2 px-2 bg-white cursor-pointer hover:bg-slate-300";
        li.textContent = result[i].description;
        li.onclick = () => {
          selectInput(result[i].description);
          setSelectedLocationId(result[i].place_id);
        }
        ul.appendChild(li);
    }

    resultBox.innerHTML = '';
    resultBox.appendChild(ul);
}

function selectInput(list) {
  console.log(list);
  inputBox.value = list;
  resultBox.innerHTML = '';
}

function setSelectedLocationId(id){
  console.log(id);
  selectedLocationId = id;
}