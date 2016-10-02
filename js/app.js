var app = "eatgo";






$(document).ready(function() {


  $('body').click(function() {
    console.log("It works");
  })

  $(document).keydown(function(e) {
    console.log($('.page1').attr('style'));
    if (e.keyCode = 32) {

      if ($('.page1').attr('style') != "display: none;"){
        console.log("I read the style.");
        $('.page1').hide();
        $('.page2').show();
      } else if ($('.page2').attr('style') != "display: none;"){
            $('.page2').hide();
            $('.page3').show();
      }
      console.log($('.page1').attr('style'));


    }
  });

  // $(document).keydown(function(e) {
  //   if (e.keyCode = 32) {
  //     $('.page2').hide();
  //     $('.page3').show();
  //   }
  // });





})
