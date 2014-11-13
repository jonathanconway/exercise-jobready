'use strict';

define(['app', 'moment'], function(app, moment) {
	app.get('/', function (req, res) {
		var today = moment(),
			yesterday = moment().subtract(1, 'days'),
			twoDaysAgo = moment().subtract(2, 'days'),
			twoWeeksAgo = moment().subtract(14, 'days'),
			model = {
				recentActiveCandidates: [
					{
						name: 'Jonathan Conway',
						occupation: 'Programmer',
						avatarImageUrl: 'http://0.gravatar.com/avatar/30b5f67cfae1269e00a66300d98c025d',
						recentActivity: [
							{
								text: 'Applied for <a href="#">Programmer</a> role at <a href="#">Microsoft</a>',
								dateText: yesterday.format('LLL'),
								dateCalendarText: yesterday.calendar()
							},
							{
								text: 'Contacted <a href="#">Sydney</a> JobReady Centre',
								dateText: twoDaysAgo.format('LLL'),
								dateCalendarText: twoDaysAgo.calendar()
							}
						]
					},
					{
						name: 'Hannah Tuesday',
						occupation: 'Administrator',
						recentActivity: [
							{
								text: 'Interviewed with <a href="#">Insight Systems</a>',
								dateText: twoDaysAgo.format('LLL'),
								dateCalendarText: twoDaysAgo.calendar()
							},
							{
								text: 'Contacted <a href="#">Sydney</a> JobReady Centre',
								dateText: twoWeeksAgo.format('LLL'),
								dateCalendarText: twoWeeksAgo.calendar()
							}
						]
					}
				],
				recentVacanciesToday: [
					{
						id: 1,
						jobTitle: 'Trainee Chef',
						companyName: 'Saigon Bowl',
						dateText: today.format('LLL'),
						dateCalendarText: today.calendar(),
						location: 'Strathfield',
					},
					{
						id: 2,
						jobTitle: 'Receptionist',
						companyName: 'Leap Legal',
						dateText: today.format('LLL'),
						dateCalendarText: today.calendar(),
						location: 'Sydney CBD',
					}
				],
				recentVacanciesYesterday: [
					{
						id: 3,
						jobTitle: 'Train Conductor',
						companyName: 'North Strathfield Station',
						dateText: yesterday.format('LLL'),
						dateCalendarText: yesterday.calendar(),
						location: 'North Strathfield',
					}
				]				
			};

		res.render('home', model);
	});
});