
const places=[
    
    {place_id: "1", name: "CoffyAlCo" , rating: 4.2 , user_ratings_total: 210 },
    {place_id: "2", name: "CoffyAlCo" , rating: 3.2 , user_ratings_total: 105 },
    {place_id:"3", name: "CoffyAlCo" , rating: 4.5 , user_ratings_total: 210 },
    {place_id:4, name: "CoffyAlCo" , rating: 4.8 , user_ratings_total: 210 },
    {place_id:5, name: "CoffyAlCo" , rating: 4.2 , user_ratings_total: 210 },
    {place_id:6, name: "CoffyAlCo" , rating: 2.0 , user_ratings_total: 210 },
    {place_id:7, name: "CoffyAlCo" , rating: 4.2 , user_ratings_total: 210 },
    {place_id:8, name: "CoffyAlCo" , rating: 4.2 , user_ratings_total: 210 },
    {place_id:9, name: "CoffyAlCo" , rating: 4.2 , user_ratings_total: 210 }
  
  ];

  function paging_places(places, page){
    let limit=3;

    const startIndex= (page-1)*limit;
    const endIndex= page*limit;

    results = [];
    
    results= places.slice(startIndex,endIndex);

    console.log(results);

  }

  paging_places(places, 2);

  