Template.resultList.helpers({
  totCo2: function(){
    var userco2 = Session.get("currCo2");

    //console.log("we see ; ;" + userco2);
     return userco2;
    //console.log("global var Co2= "+ Co2);
    //return Co2;
  },
  unit:function(){

  },
  co2ToDate: function(){

  },
  addDiet: function(){
    // console.log("adddiet reads: "+ Diet.RedMeat.findOne());
  }
});
