var restler = require('restler');

restler.postJson('https://api.github.com/repos/CSCI-4830-002-2014/pre-class-survey/issues', {"title":"test", "body":"just testing the api"}, {username: "<username>", password:"<password>"}).on('success', function(data){
	console.log(data);
});