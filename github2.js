var restler = require('restler');

restler.get('https://api.github.com/orgs/CSCI-4830-002-2014/repos').on('complete', function(data){
	console.log(data);
});