var main = main || {};

main.App = Backbone.View.extend({
	el: '#container',
	mainTmp: _.template($('#main-template').html()),
	initialize: function(){
		this.render();
		this.detect();
		this.highlight();
		this.load();
	},

	render: function(){
		$("#container").html(this.mainTmp());
		return this;
	},

	load: function () {
	  		$(document).ready(function(){
      		$('.parallax').parallax();
    	});
	},

	detect: function detectmob() { 
		//detects what the browser environment is and responds accordingly.
		 if( navigator.userAgent.match(/Android/i)
		 || navigator.userAgent.match(/webOS/i)
		 || navigator.userAgent.match(/iPhone/i)
		 || navigator.userAgent.match(/iPad/i)
		 || navigator.userAgent.match(/iPod/i)
		 || navigator.userAgent.match(/BlackBerry/i)
		 || navigator.userAgent.match(/Windows Phone/i)
		 ){
		 	$('#circle').css("visibility", "hidden");
		    $('.row1').attr("id","devicon-mobile-row1")
        	$('.row2').attr("id","devicon-mobile-row2")
		    return true;
		 }
		 else {
		    return false;
		    $('.row1').removeAttr("devicon-mobile-row1");
        	$('.row2').removeAttr("devicon-mobile-row2");
		}
	},

	highlight: function() {
			// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
			var mainbottom = $('#main').offset().top + $('#main').height();


			// on scroll, 
			$(window).on('scroll',function(){

		    // we round here to reduce a little workload
		    stop = Math.round($(window).scrollTop());
		    if (stop > mainbottom + 280) {
		    	
		        $('#nav-list').addClass('past-main');
		    } else {
		        $('#nav-list').removeClass('past-main');
		   }

		});
	}

})