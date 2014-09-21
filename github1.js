// Brian Newsom
// Challenge 1: Get some repos.
var rest = require('restler');

rest.get('https://api.github.com/repositories').on('complete', function(res) {
	if (res instanceof Error)  {
		console.log('Error: ', res.message);
		this.retry(1000);
	}
	else {
		console.log(res);
	}
});