Template.calibration.helpers({
});

Template.redMeatC.helpers({
  impN:function(){
    // return Number(this.meat);
    return "not in use";
  },
  totMeat:function(){
    var totM = Session.get("redMeatConsumed") / 1000 * 52 ;//divided by 1000 to change it to kg, * 52 to make it annual
    Session.set("totalMeat",totM);
    return totM;
  },
  meatCo2: function(){
    var tM = Session.get("totalMeat");
    //  var aC = tM * this.co2; //this was when we were passing in this as  apartial data context
    var mC = tM * this.co2perkg;
      return mC;
    //return this.co2;
  },
  log: function () {
    console.log("From meat we see - " +this);
  },youEatRedMeat: function(){
    var rm = Session.get('redMeatConsumed');
    //if(rm !== undefined ){
    return  rm;
  //}
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
     return sC;
  },
  log: function () {
    console.log("From Soy we see - " +this);
  },
  youEatSoy: function(){
    return Session.get('soyConsumed')
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
     return cC;
  },
  log: function () {
    console.log("From cheries we see - " +this);
  },
  youEatCherries: function(){
    return Session.get('cherriesConsumed');
  }
});
