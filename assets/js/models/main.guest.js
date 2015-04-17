var main = main || {};

main.Guest = Backbone.Model.extend({
	defaults: {
		email: '',
		message: '',
	},
})