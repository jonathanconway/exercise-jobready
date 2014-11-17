'use strict';

define(['app', 'moment'], function(app, moment) {
	var today = moment(),
		yesterday = moment().subtract(1, 'days'),
		twoDaysAgo = moment().subtract(2, 'days'),
		twoWeeksAgo = moment().subtract(14, 'days'),
		feb12 = moment('2014-02-12'),
		feb10 = moment('2010-02-12'),
		activities = [
			{
				id: 0,
				text: 'Applied for <strong>Programmer</strong> role at <strong>Microsoft</strong>',
				date: yesterday,
				dateText: yesterday.format('LLL'),
				dateCalendarText: yesterday.calendar(),
				activityType: 'application',
				notes: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
			},
			{
				id: 1,
				text: 'Phoned <strong>Sydney</strong> JobReady Centre',
				staffId: 1,
				date: twoDaysAgo,
				dateText: twoDaysAgo.format('LLL'),
				dateCalendarText: twoDaysAgo.calendar(),
				activityType: 'phonecall',
				notes: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
			},
			{
				id: 2,
				text: 'Worked at <strong>Demonz Media</strong> in <strong>Hornsby</strong>',
				date: feb12,
				dateText: feb12.format('LLL'),
				dateCalendarText: feb12.calendar(),
				activityType: 'work',
				notes: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
			},
			{
				id: 3,
				text: 'Studied at <strong>TAFE</strong> in <strong>Hornsby</strong>',
				date: feb10,
				dateText: feb10.format('LLL'),
				dateCalendarText: feb10.calendar(),
				activityType: 'education',
				notes: 'ccccccccccccccccccccccccccccccccccccccccccccccccccc'
			}
		],
		candidates = [
			{
				id: 1,
				firstName: 'Jonathan',
				lastName: 'Conway',
				dob: new Date('1987-01-30'),
				name: 'Jonathan Conway',
				gender: 'M',
				occupation: 'Programmer',
				email: 'jonathan.conway@gmail.com',
				phone: '',
				mobile: '0433 299 472',
				homeAddress: '19/6-8 Woodburn Street\nRedfern, NSW, 2016',
				postalAddress: '19/6-8 Woodburn Street\nRedfern, NSW, 2016',
				avatarImageUrl: 'http://0.gravatar.com/avatar/30b5f67cfae1269e00a66300d98c025d',
				recentActivity:
					activities.filter(function (activity) {
						return [0, 1, 2, 3].indexOf(activity.id) > -1;
					}).map(function (activity) {
						return {
							id: activity.id,
							text: activity.text,
							date: activity.date,
							dateText: activity.dateText,
							dateCalendarText: activity.dateCalendarText,
							activityType: activity.activityType
						};
					})
			},
			{
				id: 2,
				name: 'Hannah Tuesday',
				occupation: 'Administrator',
				recentActivity: [
					{
						id: 4,
						text: 'Interviewed with <strong>Insight Systems</strong>',
						date: twoDaysAgo,
						dateText: twoDaysAgo.format('LLL'),
						dateCalendarText: twoDaysAgo.calendar(),
						activityType: 'interview'
					},
					{
						id: 5,
						text: 'Contacted <strong>Sydney</strong> JobReady Centre',
						date: twoWeeksAgo,
						dateText: twoWeeksAgo.format('LLL'),
						dateCalendarText: twoWeeksAgo.calendar(),
						activityType: 'interview'
					}
				]
			}
		],
		vacancies = [
			{
				id: 1,
				jobTitle: 'Trainee Chef',
				companyName: 'Saigon Bowl',
				date: today,
				dateText: today.format('LLL'),
				dateCalendarText: today.calendar(),
				location: 'Strathfield',
			},
			{
				id: 2,
				jobTitle: 'Receptionist',
				companyName: 'Leap Legal',
				date: today,
				dateText: today.format('LLL'),
				dateCalendarText: today.calendar(),
				location: 'Sydney CBD',
			},
			{
				id: 3,
				jobTitle: 'Train Conductor',
				companyName: 'North Strathfield Station',
				date: yesterday,
				dateText: yesterday.format('LLL'),
				dateCalendarText: yesterday.calendar(),
				location: 'North Strathfield',
			}
		];

	return {
		getCandidates: function () { return candidates; },
		getVacancies: function () { return vacancies; },
		getActivityDetails: function (id) {
			return activities.filter(function (activity) {
				return activity.id === id;
			})[0];
		}
	};
});