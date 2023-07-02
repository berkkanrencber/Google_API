const radiusToggle=document.querySelector("#radius-toggle");
const radiusInput=document.querySelector('#radius-input-text');
const ratingToggle=document.querySelector("#rating-toggle");
const ratingInput=document.querySelector('#rating-input-text');
const get = document.getElementById('radius-input-text')




radiusInput.disabled=true;
ratingInput.disabled=true;
radiusInput.placeholder="500"
ratingInput.placeholder="0"
radiusInput.value="500"
ratingInput.value="0"


radiusToggle.addEventListener('change',function(){
    if(!radiusToggle.checked){
        radiusInput.disabled=true
        radiusInput.placeholder="500"
        radiusInput.value="500"
    }
    else{
        radiusInput.disabled=false
        radiusInput.placeholder="Enter radius"
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
        ratingInput.placeholder="Enter rating"
    }
})
