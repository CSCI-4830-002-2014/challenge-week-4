// Restler object
var rest = require('restler');

// Github path
var path = '/repositories';

// Get
rest.get('https://api.github.com' + path).on('complete', function(data) {
	console.log(data);
});

