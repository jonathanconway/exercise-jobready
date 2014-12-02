define(['/node_modules/zepto/zepto.min.js', '/node_modules/modernizr-prebuilt/dist/modernizr-build.min.js'], function ($_, modernizr_) {
	document.getElementsByClassName('filters')[0].addEventListener('click', function (e) {
		var historyListEl = document.getElementsByClassName('history-list')[0];
		var className = '';
		var filters = document.querySelectorAll('.filters input');
		for (var i in filters) {
			if (filters[i].checked) {
				className += 'filter-' + filters[i].value + ' ';
			}
		}
		if (className === '') {
			className += 'filter-all';
		}
		historyListEl.className = 'history-list ' + className;
	});

	$('.candidate-view').on(Modernizr.touchevents ? 'touchstart' : 'click', function (e) {
		$('.candidate-view button').removeClass('active');
		$('.candidate.page').attr('class', 'candidate page ' + e.target.className);
		$('.candidate-view .' + e.target.className).addClass('active');
	});
});