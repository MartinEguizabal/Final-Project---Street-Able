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
}

]);