var main = main || {};

main.App = Backbone.View.extend({
	el: '#container',
	mainTmp: _.template($('#main-template').html()),
	initialize: function(){
		this.render();
		this.detect();
		this.highlight();
		this.load();
		this.smooth();
	},

	events: {
		"click input[type=submit]" : "submit",
	},
	render: function(){
		$("#container").html(this.mainTmp());
		return this;
	},

	load: function () {
		//enacts parallax
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
		    $('.row1').attr("id","devicon-mobile-row1");
        	$('.row2').attr("id","devicon-mobile-row2");
		    return true;
		 }
		 else {
		 	$('.row1').removeAttr("devicon-mobile-row1");
        	$('.row2').removeAttr("devicon-mobile-row2");
		    return false;
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
	},

	smooth: function(){
		$(function() {
  			$('a[href*=#]:not([href=#])').click(function() {
    				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     			 		var target = $(this.hash);
      					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      				if (target.length) {
        				$('html,body').animate({
          				scrollTop: target.offset().top - 100
        			}, 1500);
        			return false;
      				}
    			}
  			});
		});
	},

	create: function(){
		var email = document.querySelector("input[type=email]").value;
		var message = document.querySelector("textarea[name=message]").value;
		var clean_email = email.replace(/[^a-zA-Z\d.@\_\-]+/g,'');
		var clean_message = message.replace(/[^a-zA-Z\d@\_\-]+/g,'');
		this.collection.create({
          email: clean_email,
          message: clean_message
      });
		alert("Thanks for the message I'll get back to you soon.")
	},

	submit: function(e){
		e.preventDefault();
		this.create();
	},
})