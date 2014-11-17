'use strict';

define(['app', 'moment', '../services/repository'], function(app, moment, repository) {

	function getIconImageUrlForActivityType (activityType) {
		return {
				application: '/public/images/icon_79983_resume.svg',
				communication: '/public/images/icon_82326_speech_bubbles.svg',
				phonecall: '/public/images/icon_56382_phone.svg',
				work: '/public/images/icon_6048_briefcase.svg',
				education: '/public/images/icon_2402_college_cap.svg'
			}[activityType];
	}

	app.get('/candidate/:id/:activityId?', function (req, res) {
		var id = parseInt(req.params.id, 10),
			activityId = parseInt(req.params.activityId, 10),
			candidate =
				repository.getCandidates().filter(function (candidate) {
					return candidate.id === id;
				})[0],
			model = candidate;

		model.dobText = moment(candidate.dob).format('L');
		model.age = moment(new Date()).diff(candidate.dob, 'years');

		model.recentActivity.forEach(function (activity, index) {
			// use appropriate icon
			activity.iconImageUrl = getIconImageUrlForActivityType(activity.activityType);

			// put in gaps, where they exist
			if (index > 0 && model.recentActivity[index - 1].date.diff(activity.date, 'months') >= 2) {
				activity.gap = 1;
				activity.monthYear = moment(activity.date).format('MMMM YY');
			}
		});

		model.allActivityTypes =
			['Work',
			 'Education',
			 'Communication',
			 'Applications',
			 'Interviews',
			 'Placements',
			 'Apprenticeships',
			 'Licences',
			 'References'].map(function (activityType) {
			 	return {
			 		title: activityType,
			 		id: activityType.toLowerCase(),
			 		activitiesCount:
			 			model.recentActivity.filter(function (recentActivity) {
			 				return recentActivity.activityType === activityType.toLowerCase();
			 			}).length
			 	}
			 });

		if (req.params.activityId) {
			model.activityDetail = repository.getActivityDetails(activityId);
			model.activityDetail.iconImageUrl = getIconImageUrlForActivityType(model.activityDetail.activityType);

		} else {
			model.activityDetail = null;
		}

		// if (!candidate) {
		// 	res.redirect('/404');
		// }

		model.serializedModel = JSON.stringify(model);

		res.render('candidate', model);
	});
});