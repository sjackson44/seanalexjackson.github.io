var main = main || {};

var ENTER_KEY = 13

var collection = new main.Guests();
new main.App({collection: collection});

new WOW(
    { offset: 120 }
).init();

// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#main').offset().top + $('#main').height();


// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom + 50) {
    	
        $('#nav-list').addClass('past-main');
    } else {
        $('#nav-list').removeClass('past-main');
   }

});


function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

if(window.detectmob()===true){
	$('#circle').css("visibility", "hidden");
	$('#mobile-welcome').("visibility", "visible");
} 

// else {
// 		$('#circle').css("visibility", "visible");
// 	$('#mobile-welcome').("visibility", "hidden");
// }



   $(document).ready(function(){
      $('.parallax').parallax();
    });




