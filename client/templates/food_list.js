Template.foodList.helpers({
  foods: function(){
    var ff = Foods.find();
    ff.forEach((foo) => {
      //var pop = foo.foodType ;
      Diet.insert({ft: foo.foodType, cv : 0 });
    //  console.log(foo.foodType + ' added to Diet');
    });
    return ff;
  }

});
