// Brian Newsom
// Challenge 4: Get CLOSED pull requests from challenge week 1
var rest = require('restler');
var request = "?state=closed";
rest.get('https://api.github.com/repos/csci-4830-002-2014/challenge-week-1/pulls' + request).on('complete', function(res) {
	if (res instanceof Error)  {
		console.log('Error: ', res.message);
		this.retry(1000);
	}
	else {
		console.log(res);
	}
});