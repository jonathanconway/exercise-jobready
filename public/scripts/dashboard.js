define(['/node_modules/zepto/zepto.min.js', '/node_modules/modernizr-prebuilt/dist/modernizr-build.min.js'], function ($_, _modernizr) {
	$('.dashboard-view').on(Modernizr.touchevents ? 'touchstart' : 'click', function (e) {
		$('.dashboard-view button').removeClass('active');
		$('.dashboard-row').attr('class', 'dashboard-row ' + e.target.className);
		$('.dashboard-view .' + e.target.className).addClass('active');
	});
});