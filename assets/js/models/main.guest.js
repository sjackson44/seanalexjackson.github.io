var main = main || {};

main.Guest = Backbone.Model.extend({
	defaults: {
		name: '',
		email: '',
		message: '',
	},
})