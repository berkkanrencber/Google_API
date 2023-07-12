import { sendRequest } from "../send-request.js";
import { place_types } from "./place-types.js";
import { getLocationId } from "./autocomplete.js";
import { getMarkedPlaceId,placeMarkerFromMap } from "./geocoding.js";

let places;
function clickRequest(){
  if(document.getElementById('autocomplete').value!=""){

    var typeValue=document.getElementById('input-type');
    var radiusValue=document.getElementById('radius-input-text').value;
    var ratingValue=document.getElementById('rating-input-text').value;
    var place_id = getLocationId() ? getLocationId() : getMarkedPlaceId();
    var totalValue=document.getElementById('total-rating-input-text').value;
    let URL = `http://localhost:8080/get/nearby_search?place_id=${place_id}&radius=${radiusValue}&type=${place_types[typeValue.selectedIndex]}&rating=${ratingValue}&user_ratings_total=${totalValue}`

    sendRequest(URL, 'GET')
        .then(data => {   
            places = data;
            createMarker(places.results);
            createPageButtons(places.results,8);
        })
        .catch(err => {
            console.error(err)
        })

    loadingAnimation();
  }
}

document.getElementById('button-search-button').addEventListener('click', clickRequest);
document.getElementById('export-btn').style.visibility = "hidden";

function createMarker(places_array){
    for(let place of places_array){
        placeMarkerFromMap(place.name,place.location);
    }
}

function loadingAnimation(){
    document.querySelector("#data-output").innerHTML="";
    let loading = document.querySelector("#paging-buttons");
    loading.innerHTML="";
    let i;
    for(i=0; i<8; i++)
    loading.innerHTML += `<div class="border-b-2 border-gray-600 shadow m-4 p-4 max-w-xxl w-full mx-auto">
  <div class="animate-pulse  flex space-x-4">
    <div class=" bg-slate-700 h-7 w-7"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
      </div>
    </div>
  </div>
</div>`
}

function getPlacesWithPage(places_array,page,limit){
    const startIndex= (page-1)*limit;
    const endIndex= page*limit;

    let results = [];
    results= places_array.slice(startIndex,endIndex);

    //to list all wished places
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let place of results){
            out += `
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" class="checkbox" id="c${place.place_id}" ${selected_places.includes(`c${place.place_id}`)?'checked':''}/>
                        </label>
                    </th>
                    <td class="text-center">
                        <div class="overflow-hidden">
                            <div>
                                <div class="font-bold w-48 overflow-hidden">${place.name}</div>
                            </div>
                        </div>
                    </td>
                    <td class="text-center">
                        ${place.rating}
                    </td>
                    <td class="text-center">${place.user_ratings_total}</td>
                    <th>
                        <label for="my-drawer-4" class="drawer-button btn" id="${place.place_id}">Details</label>
                    </th>
                </tr>
            `;
            placeholder.innerHTML = out;
    }
    for(let i = 0; i < results.length; i++){
        document.getElementsByClassName('drawer-button')[i].addEventListener('click', fetchPlaceDetails);
        document.getElementsByClassName('drawer-button')[i].param = document.getElementsByClassName('drawer-button')[i].id;
        document.getElementsByClassName('checkbox')[i].addEventListener('change', checkSelectedPlaces);
    }
}

let selected_places=[];
function checkSelectedPlaces(){
    if(this.checked){
        selected_places.push(this.id)
        document.getElementById('export-btn').style.visibility = "visible";
    }
    
    else{
        const index = selected_places.indexOf(this.id);
        if (index > -1) // only splice array when item is found
         selected_places.splice(index, 1); // 2nd parameter means remove one item only
        if(selected_places.length==0)
         document.getElementById('export-btn').style.visibility = "hidden";
    }
}
document.getElementById('export-btn').addEventListener('click',click_export_button);
async function click_export_button(){
    var base_url = "http://localhost:8080/get/place_detail?place_id="
    var csv = "Mekan adı, Puan, Değerlendirme Sayısı, Telefon, Adres\n"
    for(var place_id of selected_places){
        var url = base_url +place_id.substring(1);
        await sendRequest(url, 'GET')
        .then(data => {
            var address = data.formatted_address.replaceAll(",","");
            csv += `${data.name}, ${data.rating}, ${data.user_ratings_total}, ${data.international_phone_number}, ${address}\n`;
        })
        .catch(err => {
            console.error(`Error: ${err}`);
        })
    }
    downloadCSV(csv);

}
function downloadCSV(csv){
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    
    //provide the name for the CSV file to be downloaded
    hiddenElement.download = 'Seçilen Mekanlar.csv';
    hiddenElement.click();
}
function fetchPlaceDetails(place_id){

    let URL = `http://localhost:8080/get/place_detail?place_id=${place_id.currentTarget.param}`

    sendRequest(URL, 'GET')
        .then(data => {   
            fetchDetails(data);
        })
        .catch(err => {
            console.error(err)
        })

}  

function createPageButtons(places_array,limit){
    const lastPage = Math.ceil(places_array.length / limit);

//to show exact paging button numbers
    let placeholder_btn = document.querySelector("#paging-buttons");
    let out_btn = "";
    let i;
    for(i=1; i<=lastPage; i++){
            out_btn += `
            <button class="join-item btn" id="btn${i}">${i}</button>
            `;
    }
    placeholder_btn.innerHTML = out_btn;

    getPlacesWithPage(places_array,1,limit);

    let buttons = document.querySelectorAll('.join-item');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let page = parseInt(button.innerText);
            getPlacesWithPage(places.results,page, 8);
        })
    })
}

const place_name = document.getElementById('place-name');
const place_rating = document.getElementById('place-rating');
const place_address = document.getElementById('place-address');
const place_phone = document.getElementById('place-phone');
const place_user_total_rating = document.getElementById('place-user-total-rating');
const place_url = document.getElementById('place-url');
const place_weekday_text = document.getElementById('place-weekday-text');
const place_type = document.getElementById('place-types');
const place_review = document.getElementById('place-reviews');

function fetchDetails(place_details_array){

    let reviews = [];
    reviews = place_details_array.reviews; 

    place_name.innerHTML = place_details_array.name;
    place_rating.innerHTML = place_details_array.rating;
    place_address.innerHTML = place_details_array.formatted_address;
    place_phone.innerHTML = place_details_array.international_phone_number;
    place_user_total_rating.innerHTML = place_details_array.user_ratings_total;
    place_url.innerHTML = place_details_array.url;
    place_url.href = place_details_array.url;



    place_weekday_text.innerHTML = "";
    for(let i = 0; i < place_details_array.weekday_text.length; i++){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(place_details_array.weekday_text[i]));
        place_weekday_text.appendChild(li);
    }

    place_type.innerHTML = "";
    for(let i = 0; i < place_details_array.types.length; i++){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(place_details_array.types[i]));
        place_type.appendChild(li);
    }

    let out="";
    let index=0;
    for(let review of reviews){
        out+=`
        <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img src="${review.profile_photo_url}" />
          </div>
        </div>
        <div class="chat-header">
          ${review.author_name}
          <time class="text-xs opacity-50">${review.relative_time_description}</time>
        </div>
        <div class="chat-bubble">${review.text}</div>
        <div class="chat-footer opacity-50">
            <div class="rating rating-sm">
                <input type="radio" name="rating-${review.rating}-${index}" class="mask mask-star-2 bg-orange-400" id="star-1-${index}" onclick="javascript: return false" />
                <input type="radio" name="rating-${review.rating}-${index}" class="mask mask-star-2 bg-orange-400" id="star-2-${index}" onclick="javascript: return false" />
                <input type="radio" name="rating-${review.rating}-${index}" class="mask mask-star-2 bg-orange-400" id="star-3-${index}" onclick="javascript: return false" />
                <input type="radio" name="rating-${review.rating}-${index}" class="mask mask-star-2 bg-orange-400" id="star-4-${index}" onclick="javascript: return false" />
                <input type="radio" name="rating-${review.rating}-${index}" class="mask mask-star-2 bg-orange-400" id="star-5-${index}" onclick="javascript: return false" />
            </div>
        </div>
        </div>
        `
        place_review.innerHTML=out;
        index++;
    }

    for(let i=0; i<reviews.length; i++){
        document.getElementById(`star-${reviews[i].rating}-${i}`).checked=true;
    }
}
