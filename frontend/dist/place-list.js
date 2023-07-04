import { sendRequest } from "../send-request.js";
import { place_types } from "./place-types.js";
import { getLocationId } from "./autocomplete.js";
import { getMarkedPlaceId } from "./geocoding.js";

let places;
function clickRequest(){
    var typeValue=document.getElementById('input-type');
    var radiusValue=document.getElementById('radius-input-text').value;
    var ratingValue=document.getElementById('rating-input-text').value;
    var place_id = getLocationId() ? getLocationId() : getMarkedPlaceId();
    let URL = `http://localhost:8080/get/nearby_search?place_id=${place_id}&radius=${radiusValue}&type=${place_types[typeValue.selectedIndex]}&rating=${ratingValue}`

    sendRequest(URL, 'GET')
        .then(data => {   
            places = data;
            createPageButtons(places.results,7);
        })
        .catch(err => {
            console.error(err)
        })
    console.log('click')
}

document.getElementById('button-search-button').addEventListener('click', clickRequest);

function getPlacesWithPage(places_array,page,limit){
    const startIndex= (page-1)*limit;
    const endIndex= page*limit;

    let results = [];
    results= places_array.slice(startIndex,endIndex);
    console.log(results);

    //to list all wished places
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let place of results){
            out += `
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" class="checkbox" />
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
                        <label for="my-drawer-4" class="drawer-button btn">Details</label>
                    </th>
                </tr>
            `;
            placeholder.innerHTML = out;
    }
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
            console.log(button.innerText);
            getPlacesWithPage(places.results,page, 7);
        })
    })
}

// function fetchPlaces(places_array,page){

//     let limit=7;

//     const lastPage = Math.ceil(places_array.length / limit);
//     const startIndex= (page-1)*limit;
//     const endIndex= page*limit;

//     let results = [];
//     results= places_array.slice(startIndex,endIndex+1);

    

// //to show exact paging button numbers
//     let placeholder_btn = document.querySelector("#paging-buttons");
//     let out_btn = "";
//     let i;
//     for(i=1; i<=lastPage; i++){
//             out_btn += `
//             <button class="join-item btn" id="btn${i}" onclick="fetchPlaces(places.results,${i})">${i}</button>
//             `;
//             placeholder_btn.innerHTML = out_btn;
//     }

// //to list all wished places
//     let placeholder = document.querySelector("#data-output");
//     let out = "";
//     for(let place of results){
//         if(place.rating > 0){
//             out += `
//                 <tr>
//                     <th>
//                         <label>
//                             <input type="checkbox" class="checkbox" />
//                         </label>
//                     </th>
//                     <td class="text-center">
//                         <div class="space-x-3 ">
//                             <div>
//                                 <div class="font-bold">${place.name}</div>
//                             </div>
//                         </div>
//                     </td>
//                     <td class="text-center">
//                         ${place.rating}
//                     </td>
//                     <td class="text-center">${place.user_ratings_total}</td>
//                     <th>
//                         <label for="my-drawer-4" class="drawer-button btn">Details</label>
//                     </th>
//                 </tr>
//             `;
//             placeholder.innerHTML = out;
//         }
//     }
// }





