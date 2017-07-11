Template.calibration.helpers({
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
    //
    //var curC =Session.get("currCo2");
    // curC = Number(curC);
    // mC  = Number(mC);
    //curC += mC;
    // Session.set("currCo2",  curC);
     Session.set("currCo2",  Session.get("currCo2")+mC);
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
    var tS = Session.get("totalSoy");
     var sC = tS * this.co2perkg;
     //
  //   if(Session.get("curCo2")!== undefined){
    Session.set("currCo2",  Session.get("currCo2")+sC);
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
     //
     Session.set("currCo2",  Session.get("currCo2")+cC);
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
