var main = main || {};

var ENTER_KEY = 13

var collection = new main.Guests();
new main.App({collection: collection});

new WOW(
    { offset: 120 }
).init();

// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#main').offset().top + $('#main').height();
console.log(mainbottom)

// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    console.log(stop)
    if (stop > mainbottom + 50) {
        $('#nav-list').addClass('past-main');
    } else {
        $('#nav-list').removeClass('past-main');
   }

});

   $(document).ready(function(){
      $('.parallax').parallax();
    });
        



