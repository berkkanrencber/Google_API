import { sendRequest } from "../send-request.js";


document.getElementById('autocomplete').addEventListener('input', onChangeLocation);

function onChangeLocation(){
  var location = document.getElementById('autocomplete').value;
  let URL = "http://localhost:8080/get/autocomplete?input=" + location;

  sendRequest(URL, 'GET')
        .then(data => {   
            console.log(JSON.stringify(data.predictions))
        })
        .catch(err => {
            console.error(err)
        })

  console.log(location);
}
