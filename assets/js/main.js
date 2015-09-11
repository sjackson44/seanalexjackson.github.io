$(document).ready(function() {
  // $('.parallax').parallax();
  var ret = 0;
  $('#screen').click(function() {
    if (ret === 0) {
      $('#title').fadeOut();
      $('#nav').removeClass('hidden');
      $('#nav').addClass('visible');
      $('#info-container').removeClass('hidden');
      $('#info-container').addClass('visible');
      ret = 1;
    } else if (ret === 4) {
      $('#title').fadeIn();
        $('#nav').css('visibility','hidden');
      ret = 0;
    }
  });
});