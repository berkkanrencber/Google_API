
let lastResults=[];
var ratingValue=document.getElementById('rating-input-text').value;
var totalRatingValue=document.getElementById('total-rating-input-text').value;  //totalRatingInput.value tanımlanacak

function checkProperty(places, rating, totalRating){ 
    if (rating==0 && totalRating==0)
        return places;
    for(let place of places){
        if(place.rating >= ratingValue && place_user_total_rating >= totalRatingValue) 
            lastResults.push(place);
    }
    return lastResults;
}

module.exports={
    checkProperty
};