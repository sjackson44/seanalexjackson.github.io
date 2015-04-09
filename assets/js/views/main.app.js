var main = main || {};

main.App = Backbone.View.extend({
	el: '#container',
	mainTmp: _.template($('#main-template').html()),
	initialize: function(){
		this.render();
	},
	render: function(){
		$("#nav-bar").html(this.mainTmp());

		return this;
	},
})