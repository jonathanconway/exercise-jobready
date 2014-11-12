'use strict';

define(['app'], function(app) {
	app.get('/', function (req, res) {
		var model = {};
		res.render('home', model);
	});
});