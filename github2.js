// Restler object
var rest = require('restler');

// Github path
var path = '/orgs/CSCI-4830-002-2014/repos';

// Get
rest.get('https://api.github.com' + path).on('complete', function(data) {
	console.log(data);
});

