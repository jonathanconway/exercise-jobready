'use strict';

define(['app', 'moment', '../services/repository'], function(app, moment, repository) {
	app.get('/candidate/:id', function (req, res) {
		var id = parseInt(req.params.id, 10),
			candidate =
				repository.getCandidates().filter(function (candidate) {
					return candidate.id === id;
				})[0],
			model = candidate;

		model.dobText = moment(candidate.dob).format('L');
		model.age = moment(new Date()).diff(candidate.dob, 'years');

		model.recentActivity.forEach(function (activity, index) {
			// use appropriate icon
			activity.iconImageUrl = {
				application: '/public/images/icon_79983_resume.svg',
				communication: '/public/images/icon_82326_speech_bubbles.svg',
				work: '/public/images/icon_6048_briefcase.svg'
			}[activity.activityType];

			// put in gaps, where they exist
			if (index > 0 && model.recentActivity[index - 1].date.diff(activity.date, 'months') >= 2) {
				activity.gap = 1;
			}
		});

		// if (!candidate) {
		// 	res.redirect('/404');
		// }

		res.render('candidate', model);
	});
});