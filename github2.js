// Brian Newsom
// Challenge 2: Get course repos.
var rest = require('restler');

rest.get('https://api.github.com/orgs/csci-4830-002-2014/repos').on('complete', function(res) {
	if (res instanceof Error)  {
		console.log('Error: ', res.message);
		this.retry(1000);
	}
	else {
		console.log(res);
	}
});