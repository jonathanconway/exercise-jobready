'use strict';

define(['app', 'moment', '../services/repository'], function(app, moment, repository) {
	app.get('/about', function (req, res) {
		var model = {
			nounProjectAttributions: [
				{ iconName: 'Phone', urlUsername: 'desbenoit', username: 'Desbenoit' },
				{ iconName: 'College', urlUsername: 'samanbb', username: 'Saman Bemel-Benrud' },
				{ iconName: 'Resume', urlUsername: 'jaimecarrion', username: 'Jaime Carrion' },
				{ iconName: 'Communication', urlUsername: 'evanmacdonald', username: 'Evan MacDonald' },
				{ iconName: 'Briefcase', urlUsername: 'dmitry.kudinov.35', username: 'Dmitry Kudinov' },
			]
		};

		res.render('about', model);
	});
});