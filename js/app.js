// BACK END LOGIC
var mealList = [];

function Meal(title, cost)
{
  this.title = title;
  this.price = cost;
  this.id = mealList.length + 1;
  mealList.push(this);
}

var Item1 = new Meal("Chicken Parm", 12);
var Item2 = new Meal("Artichoke Dip", 5);
var Item3 = new Meal("IPA Beer", 6);
var Item4 = new Meal("Garden Salad", 7);
var Item5 = new Meal("Fish & Chips", 14);

var myItems = [];

var find = function(id) {
  return mealList[id - 1];
}

var addToMyItems = function(id){
  myItems.push(find(id));
}

var checkForRemove = function(id) {
  for (var i = 0; i < myItems.length; i++) {
    console.log("comparing" + myItems[i].id + " and " + id);
    if (id == myItems[i].id) {
      console.log("true");
      return true;
    }
  }
  console.log("false");
  return false;
}

var remove = function(id) {
  for (var i = 0; i < myItems.length; i++) {
    if (myItems[i].id == id) {
      myItems.splice(i, 1);
      console.log(myItems.count);
    }
  }
}

function getTotal() {
  totalCost = 0;
  for (var i = 0; i < myItems.length; i++) {
    totalCost += myItems[i].price;
  }
  return totalCost;
}


// FRONT END LOGIC

$(document).ready(function() {
  mealList.forEach(function(meal) {
    $("#list").append("<hr><button class='btn btn-success col-md-6 mealItem' value=" + meal.id + ">" + meal.title + ", $" + meal.price + "</button>");
  });

  $('body').click(function() {
    console.log("It works");
  })

  $(".mealItem").click(function() {
    var currentId = $(this).val();
    $(this).toggleClass("btn-danger");
    if (checkForRemove(currentId) === false) {
      console.log("you've added a new meal.");
      addToMyItems(currentId);
    } else {
      console.log("you've removed an existing meal.");
      remove(currentId);
    }
    $("#total").text(parseInt(getTotal()));
});


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


$('.ticket-number-form').submit(function(event) {
  event.preventDefault();
  if ($("#meal-id").val() === "123ABCD") {
    $(location).attr('href', './app-demo.html');
  } else {
    $(".output").text("PLEASE ENTER A VALID RECEIPT NUMBER");
  }
})






})
