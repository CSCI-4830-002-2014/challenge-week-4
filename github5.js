// TODO:
var rest = require('restler');

var api_request = "repos/antsankov/hackathon-github/stats/contributors"

rest.get('https://api.github.com/' + api_request).on('complete', function(data) {
	console.log(data[0]);
});
