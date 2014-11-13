'use strict';

define(['app', 'moment', '../services/repository'], function(app, moment, repository) {
	app.get('/', function (req, res) {
		var vacancies = repository.getVacancies(),
			model = {
				recentActiveCandidates: repository.getCandidates(),
				recentVacanciesToday:
					vacancies.filter(function (vacancy) {
						return vacancy.date.diff(moment(new Date()), 'days') === 0;
					}),
				recentVacanciesYesterday:
					vacancies.filter(function (vacancy) {
						return vacancy.date.diff(moment(new Date()), 'days') < 0;
					})
			};

		res.render('home', model);
	});
});