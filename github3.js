// Brian Newsom
// Challenge 3: Get forks from week 1 Challenge

var rest = require('restler');

rest.get('https://api.github.com/repos/csci-4830-002-2014/challenge-week-1/forks').on('complete', function(res) {
	if (res instanceof Error)  {
		console.log('Error: ', res.message);
		this.retry(1000);
	}
	else {
		console.log(res);
	}
});