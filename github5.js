// Restler object
var rest = require('restler');
var url  = require('url');
var fs   = require('fs');

// Github path
var path = '/repos/rodenr/hackathon-accesslog/stats/contributors';

// Url 
queryUrl = url.format({
	protocol: 'https',
	host:     'api.github.com',
	pathname: path
});

// Get data
rest.get(queryUrl).on('complete', function(data) {
	console.log(data);
});

