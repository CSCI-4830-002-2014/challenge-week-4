// Adrian Chen
// Challenge 2

var rest = require('restler');

var login = {
	username: 'adrian-chen',
	password: 'alien360'
};

var post = {
	'title': 'Challenge 6',
	'body': 'What breakfast?'
};

rest.postJson('https://api.github.com/repos/csci-4830-002-2014/challenge-week-4/issues',post,login).on('complete', function(result) {
	if(result instanceof Error){
		console.log(result.message);
		this.retry(1000);
	}
	else{
		console.log(result);
	}
});
