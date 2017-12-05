

$( document ).ready(function() {

    $( ".btn1" ).click(function( event ) {
        $("p").slideUp("slow", "swing");
        $(".new").slideUp();
           });

    $( ".btn2" ).click(function( event ) {
        $("p").slideDown();
         $(".new").slideDown();
               });
    $("#b").click(function(event){
        $(".new").animate('red')
    });


    $(".button").click(function(){
        var div = $("div");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });



    $( "li" ).hover(
        function() {
          $( this ).addClass("nav-hover");
        }, function() {
          $( this ).removeClass("nav-hover");
        }
      );


      $('.pic').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });

    
     

});

$(document).ready(function() {
    
     $("#owl-example").owlCarousel();
    
   });   