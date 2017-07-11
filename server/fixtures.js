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

  // Foods.update(
  //   foodType: "cherries"
  //   {
  // foodType: "cherries",
  // foodGroup: "Fruit",
  // si: "g",
  // co2perkg: 0.01,
  // h20perkg: 99,
  // kJperkg: 99,
  // livesperkg: 99,
  // url: "99.com"
  // });
  //
  //
  // db.foods.update({'foodType': 'cherries'},{$set:{'co2perkg':0.025}})
}
