// Adrian Chen
// Challenge 2

var rest = require('restler');

rest.get('https://api.github.com/repos/csci-4830-002-2014/challenge-week-1/pulls?state=closed').on('complete', function(result) {
	if(result instanceof Error){
		console.log(result.message);
		this.retry(1000);
	}
	else{
		console.log(result);
	}
});
