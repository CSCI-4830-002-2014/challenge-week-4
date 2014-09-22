// Restler object
var rest = require('restler');
var url  = require('url');

// Github path
var path = '/repos/CSCI-4830-002-2014/challenge-week-1/pulls';

// Parameters
var params = {state: 'closed'};

// Url 
queryUrl = url.format({
	protocol: 'https',
	host:     'api.github.com',
	pathname: path,
	query:    params
});

// Get data
rest.get(queryUrl).on('complete', function(data) {
	console.log(data);
});

