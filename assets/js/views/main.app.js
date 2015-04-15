var main = main || {};

main.App = Backbone.View.extend({
	el: '#container',
	mainTmp: _.template($('#main-template').html()),
	initialize: function(){
		this.render();
		this.detect();
	},

	events: {
		"window scroll" : "highlight"
	},
	render: function(){
		$("#container").html(this.mainTmp());
		return this;
	},

	detect: function detectmob() { 
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

})