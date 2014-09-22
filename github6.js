// TODO:
var rest = require('restler');

var api_request = "repos/csci-4830-002-2014/challenge-week-4/issues"

rest.postJson('https://api.github.com/' + api_request, 
	{
	'title': 'This is a new issue!'
	}, 
	{	
	username: 'dano8957',
	password: '**********'
	}
	).on('complete', function(data) {
	console.log(data);
});
