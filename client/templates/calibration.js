Template.calibration.helpers({
  youEat: function(){
    var cF = this.foodType;
    var curF = Diet.findOne({ft: cF});
    var guardedCurV = curF && curF.cv;
    return guardedCurV;
  },
  totFood: function(){
    var cF = this.foodType;
    var curF = Diet.findOne({ft: cF});
    var guardedCurV = curF && curF.cv;
    var guarded_id = curF && curF._id;
    var totF = guardedCurV  / 1000 * 52 ;//divided by 1000 to change it to kg, * 52 to make it annual

    Diet.upsert( guarded_id  , {$set: {tv: guardedCurV}});
    return totF;
  },
  foodCo2: function(){
    var thisC = this.co2perkg;
    var cF = this.foodType;
    var curF = Diet.findOne({ft: cF});
    var guardedCurV = curF && curF.cv;
    var guarded_id = curF && curF._id;
    var totFoodCo2 = guardedCurV /1000 * thisC;
    Diet.upsert( guarded_id  , {$set: {tCo2: totFoodCo2}});
    return totFoodCo2;
  }
});

Template.redMeatC.helpers({

  totMeat:function(){
    var totM = Session.get("redMeatConsumed") / 1000 * 52 ;//divided by 1000 to change it to kg, * 52 to make it annual
    Session.set("totalMeat",totM);
    return totM;
  },
  meatCo2: function(){
    var tM = Session.get("totalMeat");
    var mC = tM * this.co2perkg;
    // mC = mC.toFixed(2); TODO THIS LINE RECUCES THE DECIMAL PLACES TO 2 BUT STOPS THE RESULTS FROM ADDING UP, THEY CONCATINATE INSTEAD
    //
    if( tM > 0){
      console.log("global Co2 = "+ Co2);
      Diet.update(this.foodType, mC);
      Co2 += mC;
      Session.set("currCo2",Co2);
      console.log("updated global Co2 = "+ Co2);
    //  console.log("Number(tM) > 0");
      // Session.set("currCo2",  Session.get("currCo2") + mC);
    };
    //console.log("in meatco2() currCo2= " + Session.set("currCo2",  Session.get("currCo2")+mC));
    return mC;

  },
  log: function () {
    console.log("From meat we see - " +this);
  },
  youEatRedMeat: function(){
    var rm = Session.get('redMeatConsumed');
    //if(rm !== undefined ){
    return  rm;
  //}
  },
  updateMeat: function(){
    console.log("firstplace meat active");
    if(Session.get("redMeatConsumed") > 0){
    //  console.log("TRUE Session.get('iEatRedMeat') = " +Session.get("iEatRedMeat"));
      console.log("meat active");
      return true;
    }else {
        // console.log("FALSE Session.get('iEatRedMeat')= " +Session.get("iEatRedMeat"));
      return false;
    }
  }

});

Template.soyC.helpers({
  //console.log("soyC called");
  totSoy:function(){
    var totS = Session.get("soyConsumed") / 1000 * 52 ;
    Session.set("totalSoy",totS);
    return totS;
  },
  soyCo2: function(){
    // var tS = Session.get("totalSoy");
    //  var sC = tS * this.co2perkg;
    var tS = Diet.findOne();
     var sC = tS * this.co2perkg;
     //
  //   if(Session.get("curCo2")!== undefined){
  if( tS > 0){
    Co2 += sC;
    Session.set("currCo2", Co2);
    // Session.set("currCo2",  Session.get("currCo2") + sC);
  };
    // Session.set("currCo2",  Session.get("currCo2")+sC);
       //var curC =Session.get("curCo2");
       //curC =Number(curC);
       //curC += sC;
      // Session.set("currCo2",  curC);
    // }
     //
     return sC;
  },
  log: function () {
    console.log("From Soy we see - " +this);
  },
  youEatSoy: function(){
    return Session.get('soyConsumed')
  },
  updateSoy: function(){
    if(Session.get("soyConsumed") > 0) {
      // console.log("TRUE Session.get('iEatRedMeat') != " +Session.get("iEatRedMeat"));
      console.log("soy active");
      return true;
    }else {
        // console.log("FALSE Session.get('iEatRedMeat')= " +Session.get("iEatRedMeat"));
      return false;
    }
  }
});
Template.cherriesC.helpers({
  totCherries:function(){
    var totC = Session.get("cherriesConsumed") / 1000 * 52 ;
    Session.set("totalCherries",totC);
    return totC;
  },
  cherriesCo2: function(){
    var tC = Session.get("totalCherries");
     var cC = tC * this.co2perkg;
    //  cC= cC.toFixed(2);
     //
     if( tC > 0){
       Co2 += cC;
       Session.set("currCo2",Co2);
      //  Session.set("currCo2",  Session.get("currCo2") + cC);
     };
    //  Session.set("currCo2",  Session.get("currCo2")+cC);
       //if(Session.get("curCo2")!== undefined){
       //var curC =Session.get("currCo2");
       //curC = Number(curC);
      // curC += cC;
       //Session.set("curCo2",  curC);
  //  }
     //
     return cC;
  },
  log: function () {
    console.log("From cheries we see - " +this);
  },
  youEatCherries: function(){
    return Session.get('cherriesConsumed');
  },
  updateCherries: function(){
    if(Session.get("cherriesConsumed") > 0){
      console.log("cherries active");
      // console.log("TRUE Session.get('iEatRedMeat') != " +Session.get("iEatRedMeat"));
      return true;
    }else {
         console.log("FALSE Session.get('cherriesConsumed')= " +Session.get("cherriesConsumed"));
      return false;
    }
  }
});
