/*$(document).ready(function(){
*/


$(document).ready(function() {

    $(".toggle").click(function(i){
        $('.toggle').toggleClass('active')
        $('.overlay').toggleClass('active')
         $('.menu').toggleClass('active')
         $('.menu li a').click(function(){
        
         })
    });
    


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

$(function (){
	'use strict';
  //smoothly scroll to element 
 $('nav ul li a').click(function (e){
 	e.preventDefault();
 	$('html,body').animate({
 		scrollTop: $('#' + $(this).data('scroll')).offset().top
 	},1000);
 });

});

$(function (){
	'use strict';
  //smoothly scroll to element 
 $('.menu ul li a').click(function (e){
 	e.preventDefault();
 	$('html,body').animate({
 		scrollTop: $('#' + $(this).data('scroll')).offset().top
          
 	},1000);
 });

});

/*

*/
var scrollButton = $("#scroll-top");
$(window).scroll(function(){

	if($(this).scrollTop()>= 700)
	{
		scrollButton.show();
	}
	else{
		scrollButton.hide();
	}
	
	});

scrollButton.click(function()
	{
		$("html,body").animate({scrollTop:0},600);
	});


// nise scroll style and syntax 

$("body").niceScroll({
  cursorcolor:"#eee",
  cursorwidth:"25px",
  zindex:9999999,
  coursor:"pointer",
    cursorborder:"transparent"
});



  
  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
      $(".loading-page .counter h1").html(c + "%");
       $(".loading-page .counter .hr").css("width", c + "%");
   //     $(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

    
   // $(".loading-page .counter h1.color").css("width", c + "%");
    
    counter++;
    c++;
      
    if(counter == 101) {
        clearInterval(i);
               $('.loading-page').fadeOut(1000);
    }
  }, 50);
    
    //wow javascript 
     new WOW().init();

});
