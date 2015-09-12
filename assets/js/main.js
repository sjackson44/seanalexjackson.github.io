$(document).ready(function() {
  var ret = 0;
  var trace;
  var id;
  var arr = [];
  var linkObj = {
    ab: 'about',
    res: 'resume',
    proj: 'projects',
    con: 'contact'
  };

  $('#screen').click(function() {
    if (ret === 0) {
      $('#title').fadeOut();
      $('#nav').removeClass('hidden').addClass('visible').fadeIn();
      $('#info-container').removeClass('hidden').addClass('visible').fadeIn('slow');
      ret = 5;
    } else if (ret === 5) {
      $('#title').fadeIn();
        $('#nav').removeClass('visible').addClass('hidden').fadeOut();
        $('#info-container').removeClass('visible').addClass('hidden').fadeOut();
      ret = 0;
    }
  });
  
  //button click functions
  $('a').hover(function() {
    id = this.id;

    $('#' + id).click(function() {
      for(var rem in linkObj) {
        if (rem !== id) {
          $('#' + linkObj[rem]).removeClass('visible').addClass('hidden');
        }
      }
      $('#' + linkObj[id]).removeClass('hidden').addClass('visible');  
    });//ends click
  });//ends hover

});