define([], function () {
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
	
});