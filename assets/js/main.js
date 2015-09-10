$(document).ready(function() {
  $('.parallax').parallax();

  //keeps track of what button has been hit
  var counter = 0
  //hides overlapping divs #about is shown first by default
  $('#resume').hide();

  //Original width of the window
  var Initwidth = $(window).width();

  //identifies the type margin-top correction applied before resize
  var typeFix = true;

  //button click behavior

 	//ADD ANOTHER COUNTER TO KEEP SUB AND ADD EQUAL
  $('#ab').click(function() {
  	if (counter === 1){
 			$('#resume').fadeOut();
	  	decMargRes(Initwidth);
	  	// $('#projects').fadeOut();
	  	$('#about').show('slow');
	  	counter = 0;
      typeFix = false;
  	}
  });

  $('#res').click(function() {
  	if (counter === 0){
	  	$('#about').fadeOut();
	  	incMargRes(Initwidth);
	  	// $('#projects').fadeOut();
	  	$('#resume').show('slow');
	  	counter = 1;
      typeFix = false;
  	}
  });

  $('#projects').click(function(e) {
  	e.preventDefault();
  	// $('#personal-info').fadeOut();
  	$('#about').fadeIn('slow',function(){

  	});


  });
  
  var lastWindowWidth = Initwidth;
  $(window).resize(function(){
    var currWidth = $(window).width();

    if(typeFix === false && currWidth >= lastWindowWidth) {
    
      
      $('#contact').css("margin-top", '-=10'); 
      
      lastWindowWidth = currWidth;     
    } else if (typeFix === false && currWidth <= lastWindowWidth) {
        
      $('#contact').css("margin-top", '+=10'); 
      
      lastWindowWidth = currWidth; 
    }
  });

  function incMargRes(width){
    console.log(width)
    if (width >= 355 && width <= 556){
      $('#contact').css("margin-top", '+=550');
    }else if (width >= 557){
      $('#contact').css("margin-top", '+=600');
    }
  }

    function decMargRes(width){
    console.log(width)
    if (width >= 355 && width <= 556){
      $('#contact').css("margin-top", '-=550');
    }else if (width >= 557){
      $('#contact').css("margin-top", '-=600');
    }
  }
});