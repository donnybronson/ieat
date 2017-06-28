if (Foods.find().count() ===0){
  Foods.insert({
  foodType: "RedMeat",
  foodGroup: "meat",
  si: "g",
  co2perkg: 130,
  h20perkg: 99,
  kJperkg: 99,
  livesperkg: 99,
  url: "99.com"
  });

  Foods.insert({
  foodType: "Soy",
  foodGroup: "Pulses",
  si: "g",
  co2perkg: 0.3,
  h20perkg: 99,
  kJperkg: 99,
  livesperkg: 99,
  url: "99.com"
  });

}
