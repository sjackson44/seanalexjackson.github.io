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

    alert('Click Anywhere to begin.');


  $('#screen').click(function() {
    if (ret === 0) {
      $('#title').fadeOut();
      $('#nav').removeClass('hidden').addClass('visible').fadeIn();
      $('#info-container').removeClass('hidden').addClass('visible').fadeIn('slow');
      ret = 1;
    } else if (ret === 1) {
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
          $('#' + linkObj[rem]).removeClass('visible-plus').addClass('hidden-plus');
        }
      }
      $('#' + linkObj[id]).removeClass('hidden-plus').addClass('visible-plus');  
    });//ends click
  });//ends hover

});