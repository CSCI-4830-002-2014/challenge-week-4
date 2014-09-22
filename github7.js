// Node.js objects
var rest  = require('restler');
var url   = require('url');
var fs    = require('fs');
var async = require("async");

// OAuth
if (!fs.existsSync('oauth.token')) {
	console.log("Please put your OAuth token for github in the file 'oauth.token'");
	process.exit(1);
}
token = new String(fs.readFileSync('oauth.token')).trim();

// Flatten function
function flatten_fast(input) {	
    var flattened=[];
    for (var i=0; i<input.length; ++i) {
        var current = input[i];
		if (Array.isArray(current))
        	for (var j=0; j<current.length; ++j)
            	flattened.push(current[j]);
    }
	return flattened;
}

// Async call
function getClassEventsForPage(i, callback){
	// Url 
	queryUrl = url.format({
		protocol: 'https',
		host:     'api.github.com',
		pathname: '/orgs/CSCI-4830-002-2014/events',
		query:    {"access_token": token, page: i}
	});

	// Get data
	rest.get(queryUrl).on('complete', function(data) { callback(null, data); });
};
 
// Async call
async.map([1,2,3,4,5,6,7,8,9,10], getClassEventsForPage, function(err, results){
	flattened = flatten_fast(results);	
	console.log(JSON.stringify(flattened, undefined, 4));
});
