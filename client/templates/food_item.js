Template.foodItem.helpers({
  unitCheck: function() {
          if(this.si !== 'integer'){
            return 'much';
          }else {
            return 'many';
          };
    }

});
Template.foodItem.helpers({
  currentFood: function(){
    return Session.get("currentFood")
  },
  thisisRedmeat: function(){
    if(this.foodType==="RedMeat"){
      return true;
    }
  },
  thisisSoy:function(){
    if(this.foodType === "Soy"){
      return true;
    }
  },
  thisisCherries: function(){
    if(this.foodType ==="cherries"){
      return true;
    }
  },
  foodCheck: function(){
    var rM = Session.get("redMeatConsumed");
    var sY = Session.get("soyConsumed");
    var cC = Session.get("cherriesConsumed");
    if (this.foodType === "RedMeat"){
      if(rM > 0){
        return {redMeatC};
      };
    }else if(this.foodType === "Soy"){
      if(sY > 0){
        return {soyC};
      };
    }else if (thsi.foodType === "cherries") {
      if(cC > 0){
        return {cherriesC};
      };
    }

  }
});

//   //  //  //  THIS IS THE EVENT //  //  //
 //  //  //

Template.foodItem.events({
  'submit form': function(e) {
    e.preventDefault();
    //var ft={{foodType}};
    //if ()
    var tf = this.foodType;
    var iEat = event.target.thisFood.value;
   console.log("foodType obj= " + tf);
   console.log("i eat = " + iEat);
   //
   if(Session.get("currCo2") === undefined ){
     console.log("currCo2= undefined");
     Session.set("currCo2", 0);
   };
   //
   Session.set(tf,iEat);
   Session.set("curentFood", tf);
   //
   if(tf === "RedMeat"){
     Session.set("redMeatConsumed",iEat);
     console.log("meat snack= " + iEat);
   }else if (tf === "Soy") {
     Session.set("soyConsumed", iEat);
     console.log("soya snack= " + iEat);
   }else if (tf === "cherries") {
     Session.set("cherriesConsumed", iEat);
     console.log("fruit snack = " + iEat);
     //
   }

  }
});
