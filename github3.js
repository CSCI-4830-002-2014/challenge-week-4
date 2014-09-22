// Restler object
var rest = require('restler');

// Github path
var path = '/repos/CSCI-4830-002-2014/challenge-week-1/forks';

// Get
rest.get('https://api.github.com' + path).on('complete', function(data) {
	console.log(data);
});

