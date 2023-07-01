let autocomplete;

// var script = document.createElement("script");
// script.id = "autocomplete-script";
// script.src = "https://maps.googleapis.com/maps/api/js?key=&callback=initMap&libraries=places&v=weekly";
// document.head.appendChild(script);

function searchAutocomplete(){
  autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),
  {
    types:['geocode']
  })

  var searchBtn=document.getElementById('button-search-button');
  searchBtn.onclick=function(){
      findLocation();
  }
}

function findLocation(){
    var place = autocomplete.getPlace()
    console.log(place.geometry.location.lat())
    console.log(place.geometry.location.lng())
}

window.initMap = searchAutocomplete;