
let lastResults=[];


function checkProperty(places, rating, totalRating){ 
    lastResults = [];
    if (rating==0 && totalRating==0)
        return places;
    for(let place of places){
        if(place.rating >= rating && place.user_ratings_total >= totalRating) 
            lastResults.push(place);
    }
    return lastResults;
}

module.exports={
    checkProperty
};