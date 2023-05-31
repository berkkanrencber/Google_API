const radiusToggle=document.querySelector("#radius-toggle");
const radiusInput=document.querySelector('#radius-input-text');
const ratingToggle=document.querySelector("#rating-toggle");
const ratingInput=document.querySelector('#rating-input-text');

radiusInput.style.visibility="hidden";
ratingInput.style.visibility="hidden";

radiusToggle.addEventListener('change',function(){
    if(!radiusToggle.checked){
        radiusInput.style.visibility="hidden"
    }
    else{
        radiusInput.style.visibility="visible"
    }
})

ratingToggle.addEventListener('change',function(){
    if(!ratingToggle.checked){
        ratingInput.style.visibility="hidden"
    }
    else{
        ratingInput.style.visibility="visible"
    }
})