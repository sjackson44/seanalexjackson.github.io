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
	  	// $('#projects').fadeOut();
	  	$('#about').show('slow');
	  	counter = 0;
      typeFix = false;
  	}
  });

  $('#res').click(function() {
  	if (counter === 0){
	  	$('#about').fadeOut();
	  	// $('#projects').fadeOut();
	  	$('#resume').show('slow');
	  	counter = 1;
  	}
  });

  $('#projects').click(function() {
  	// $('#about').fadeOut();
  	$('#resume').fadeOut();
  });
});