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
  // youEatRedMeat: function(){
  //   var rm = Session.get('redMeatConsumed');
  //   //if(rm !== undefined ){
  //   return  rm;
  // //}
  // },
  // youEatSoy: function(){
  //   return Session.get('soyConsumed')
  // },
  // youEatCherries: function(){
  //   return Session.get('cherriesConsumed')
  // },
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
  }
});
Template.foodItem.events({
  'submit form': function(e) {
    e.preventDefault();
    //var ft={{foodType}};
    //if ()
    var tf = this.foodType;
    var iEat = event.target.thisFood.value;
  //var thisEl = event.target.name;
//  console.log("this is : " + thisEl);
   console.log("foodType obj= " + tf);
   console.log("i eat = " + iEat);
   Session.set(tf,iEat);
   Session.set("curentFood", tf);
   if(tf === "RedMeat"){
     Session.set("redMeatConsumed",iEat);
   }else if (tf === "Soy") {
     Session.set("soyConsumed", iEat);
   }else if (tf === "cherries") {
     Session.set("cherriesConsumed", iEat);
   }

  }
});
