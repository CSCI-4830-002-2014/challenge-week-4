var rest = require('restler');

var api_request = "repos/csci-4830-002-2014/challenge-week-1/forks"

rest.get('https://api.github.com/' + api_request).on('complete', function(data) {
	console.log(data[0]);
});
