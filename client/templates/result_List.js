Template.resultList.helpers({
  totCo2: function(){

    var Co2Add = Diet.find();
    var totCarbon = [];

    Co2Add.forEach((foo) => {


      //var pop = foo.foodType ;
      if(foo.tCo2){
        totCarbon.push(foo.tCo2);
        // console.log("totCarbon 3: "+totCarbon);
      }

       //hats
      // Diet.insert({ft: foo.foodType, cv : 0 });
    //  console.log(foo.foodType + ' added to Diet');
    });
    var oP = 0;
    for(i = 0; i <= totCarbon.length; i++){
      if(totCarbon[i]){
      oP += totCarbon[i];
      console.log("oP= " + oP);
    }
    }
    console.log("oP post for= " + oP);

    return oP;


    // var userco2 = Session.get("currCo2");

    //console.log("we see ; ;" + userco2);
    //  return userco2;
    //console.log("global var Co2= "+ Co2);
    //return Co2;
  },
  unit:function(){

  },
  co2ToDate: function(){

  },
  addDiet: function(){
    //console.log("adddiet reads: "+ Diet.findOne());
    var readOut = Diet.findOne({ft: 'RedMeat'});
    // console.log("readOut: " + readOut.cv);

    var curV = readOut && readOut.cv;// this is guarding. i think the collection is not opdated when this code first runs so we would otherwise throw an error
    console.log("readOut &&: " + curV);
    return  curV;

  }
});
