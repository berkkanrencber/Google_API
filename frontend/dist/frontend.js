const radiusToggle=document.querySelector("#radius-toggle");
const radiusInput=document.querySelector('#radius-input-text');
const ratingToggle=document.querySelector("#rating-toggle");
const ratingInput=document.querySelector('#rating-input-text');
const totalToggle=document.querySelector("#total-rating-toggle");
const totalInput=document.querySelector('#total-rating-input-text');
const get = document.getElementById('radius-input-text');




radiusInput.disabled=true
ratingInput.disabled=true
totalInput.disabled=true
radiusInput.placeholder="500"
ratingInput.placeholder="0"
totalInput.placeholder="0"
radiusInput.value="500"
ratingInput.value="0"
totalInput.value="0"



radiusToggle.addEventListener('change',function(){
    if(!radiusToggle.checked){
        radiusInput.disabled=true
        radiusInput.placeholder="500"
        radiusInput.value="500"
    }
    else{
        radiusInput.disabled=false
        radiusInput.placeholder="Enter radius (m)"
        radiusInput.value=""
    }
})

ratingToggle.addEventListener('change',function(){
    if(!ratingToggle.checked){
        ratingInput.disabled=true
        ratingInput.placeholder="0"
        ratingInput.value="0"
    }
    else{
        ratingInput.disabled=false
        ratingInput.placeholder="Enter rating (0-5)"
        ratingInput.value=""
    }
})

totalToggle.addEventListener('change',function(){
    if(!totalToggle.checked){
        totalInput.disabled=true
        totalInput.placeholder="0"
        totalInput.value="0"
    }
    else{
        totalInput.disabled=false
        totalInput.placeholder="Enter min vote number"
        totalInput.value=""

    }
})

