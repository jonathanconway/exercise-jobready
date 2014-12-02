'use strict';

var requirejs = require('requirejs');
requirejs.config({
	nodeRequire: require
});

requirejs([
	'app',
	'express',
	'less-middleware',
	'path',
	'module',
	'fs',
	'async-waterfall'],
	function (
		app,
		express,
		lessMiddleware,
		path,
		module,
		fs,
		waterfall) {
			// Route public paths
			var dirName = path.dirname(module.uri);
			['public', 'node_modules'].forEach(function (folderName) {
				app.use('/' + folderName, express.static(path.join(dirName, folderName)));
			});
			app.use('/favicon.ico', express.static(path.join(dirName, 'public/images/') + 'favicon.ico'));

			// Less
			app.use(lessMiddleware(dirName));

			// Jade
			app.set('views', dirName + '/views');
			app.set('view engine', 'jade');

			waterfall([
				function (callback) {
					// Require all the routes
					requirejs(
						fs.readdirSync('routes')
							// load 'all' first so it takes precedence
							.sort(function (a, b) { return a.indexOf('all') === -1; })
							.map(function (filename) {
								return './routes/' + filename.replace('.js', '');
							}),
						callback
					);
				}
			], function () {
				app.listen(process.env.PORT || 3200);
			});
		});