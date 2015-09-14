$(document).ready(function() {
  var ret = 0;
  var trace = true;
  var id;
  var arr = [];
  var linkObj = {
    ab: 'about',
    res: 'resume',
    proj: 'projects',
    con: 'contact'
  };

  $('.screen').hover(function() {
    if(trace === true) {
      $('#instruct').removeClass('hidden-plus').addClass('visible-plus'); 
      trace = false;
    }
  });

  $('.screen').click(function() {
    if (ret === 0) {
      $('#title').fadeOut();
      $('#nav').removeClass('hidden').addClass('visible').fadeIn();
      $('#info-sec').removeClass('hidden').addClass('visible').fadeIn('slow');
      $('#instruct').removeClass('visible-plus').addClass('hidden-plus');
      ret = 1;
    } else if (ret === 1) {
      for(var rem in linkObj) {
          $('#' + linkObj[rem]).removeClass('visible-plus').addClass('hidden-plus');
      }
      $('#title').fadeIn();
        $('#nav').removeClass('visible').addClass('hidden').fadeOut();
        $('#info-sec').removeClass('visible').addClass('hidden').fadeOut();
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