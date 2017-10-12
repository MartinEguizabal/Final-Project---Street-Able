use Edinburgh;
db.dropDatabase();

db.obstructions.insert([{
  location: "Leith Walk/Albert Street, S/E corner",
  lat: 55.962590,
  lng: -3.178880,
  type: "no dropped pavement crossing",
  grade: 2,
  description: "sidewalk on corner of Leith Walk and Albert Street not dropped resulting in abrupt grade difference between road and pavement"
},

{
  location: "Dickson Street/Iona Street, S/E corner",
  lat: 55.963451,
  lng: -3.172242,
  type: "not fully dropped pavement crossing",
  grade: 3,
  description: "sidewalk on corner of Leith Walk and Albert Street not dropped resulting in abrupt grade difference between road and pavement"
},

{
  location: "South side of Brunswick Rd",
  lat: 55.960639,
  lng: -3.179270,
  type: "raised pavement greater than 5cm",
  grade: 2,
  description: "raised pavement across full breadth of pavement between Dicksonfield and West Montgomery Place on Brunswick"
},

{
  location: "North corner of Hopetoun Cres./Hopetoun Cres.",
  lat: 55.961639,
  lng: -3.183892,
  type: "no dropped pavement at crossing",
  grade: 3,
  description: "no dropped pavement at crossing"
},

{
  location: "90 degree turn at Cambridge Gardens",
  lat: 55.966037,
  lng: -3.179825,
  type: "impassible steps descending to pavement",
  grade: 3,
  description: "steps making full access to Cambridge Gardens impossible"
},

{
  location: "Lorne Street/South Lorne Place, N/E corner",
  lat: 55.966412,
  lng: -3.174012,
  type: "broken pavement",
  grade: 1,
  description: "broken pavement making traversing difficult"
},

{
  location: "W.Montgomery Pl./Montgomery St., N/E corner",
  lat: 55.959479,
  lng: -3.178545,
  type: "broken pavement",
  grade: 1,
  description: "broken pavement making traversing difficult"
},

{
  location: "Montgomery St./E.Montgomery Place, N/W corner",
  lat: 55.959322,
  lng: -3.176658,
  type: "not fully dropped pavement crossing",
  grade: 1,
  description: "pavement not dropped making crossing E.Montgomery Place impossible at this corner"
},

{
  location: "Albert Street, North corner",
  lat: 55.962555,
  lng: -3.175506,
  type: "raised pavement greater than 5cm",
  grade: 2,
  description: "broken and raised pavement across breadth of pavement making traversing difficult without assistance"
},

{
  location: "Elgin Terrace/Edina Street, N/W corner",
  lat: 55.959786,
  lng: -3.172705,
  type: "broken pavement",
  grade: 1,
  description: "broken pavement making traversing difficult"
},

{
  location: "Lorne Street/Easter Road, N/W corner",
  lat: 55.965712,
  lng: -3.170207,
  type: "broken pavement",
  grade: 2,
  description: "broken pavement making traversing difficult without assistance"
}
]);