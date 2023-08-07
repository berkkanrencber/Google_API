const radiusToggle=document.querySelector("#radius-toggle");
const radiusInput=document.querySelector('#radius-input-text');
const ratingInput=document.querySelector('#rating-input-text');
const ratingInputValue=document.querySelector('#rating-input-text-value');
const totalInput=document.querySelector('#total-rating-input-text');
const totalInputValue=document.querySelector('#total-rating-input-text-value');
const get = document.getElementById('radius-input-text');

ratingInputValue.textContent=ratingInput.value;
ratingInput.addEventListener("input", (event)=> {
    ratingInputValue.textContent=event.target.value;
})

totalInputValue.textContent=totalInput.value;
totalInput.addEventListener("input", (event)=> {
    totalInputValue.textContent=event.target.value;
})


radiusInput.disabled=true
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