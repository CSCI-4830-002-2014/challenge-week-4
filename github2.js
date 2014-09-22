var rest = require('restler');

var api_request = "orgs/csci-4830-002-2014/repos"

rest.get('https://api.github.com/' + api_request).on('complete', function(data) {
	console.log(data[0]);
});