var app = "eatgo";






$(document).ready(function() {


  $('body').click(function() {
    console.log("It works");
  })

  $(document).keydown(function(e) {
    // console.log(e.keyCode);
    if (e.keyCode = 32) {
      $('.page1').hide();
      $('.page2').show();
    }
  })


})
