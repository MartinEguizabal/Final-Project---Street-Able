use Edinburgh;
db.dropDatabase();

db.obstructions.insert([{
  location: "Leith Walk/Albert Street",
  lat: 55.962590,
  lng: -3.178880,
  type: "no dropped sidewalk",
  grade: 1,
  description: "sidewalk on corner of Leith Walk and Albert Street not dropped resulting in abrupt grade difference between road and pavement"
}]);