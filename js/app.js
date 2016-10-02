// BACK END LOGIC

function Meal(title, cost)
{
  this.title = title;
  this.cost = parseInt(cost);
}

var Item1 = new Meal("Chicken Parm", 12);
var Item2 = new Meal("Artichoke Dip", 5);
var Item3 = new Meal("IPA Beer", 6);
var Item4 = new Meal("Garden Salad", 7);
var Item5 = new Meal("Fish & Chips", 14);
var mealList = [Item1,Item2,Item3,Item4,Item5];

var myItems = [];

Meal.prototype.addToMyItems = function(){
  myItems.push(this);
}

function getTotal() {
  totalCost = 0;
  for (var i = 0; i < myItems.length; i++) {
    totalCost += myItems[i].cost;
  }
}


// FRONT END LOGIC

$(document).ready(function() {


  $('body').click(function() {
    console.log("It works");
  })

  // THIS FUNCTION ADVANCES BETWEEN THE INITIAL PAGES
  $('.advance').click(function() {
      if ($('.page1').attr('style') != "display: none;"){
        console.log("I read the style.");
        $('.page1').hide();
        $('.page2').show();
        console.log($('.page1').attr('style'));
      } else if ($('.page2').attr('style') != "display: none;"){
        $('.page2').hide();
        $('.page3').show();
      }
  });






})
