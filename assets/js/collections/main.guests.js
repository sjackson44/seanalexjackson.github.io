var main = main || {};

main.Guests = Backbone.Firebase.Collection.extend({
	model: main.Guest,
	url:"https://sajportfolio.firebaseio.com/guests"
})