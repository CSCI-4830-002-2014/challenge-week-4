// TODO:
var rest = require('restler');
var async = require("async");

var api_request = "orgs/csci-4830-002-2014/events"


function getClassEventsForPage(i, callback){


rest.get('https://api.github.com/' + api_request + '?page=' + i).on('complete', function(data) {
	callback =  console.log(data);
});
};

function flatten_fast(input){	
// TODO: Use a faster implementation
// (ref: http://jsperf.com/flatten-an-array-loop-vs-reduce)
	var flattened = [];
	for (var i=0; i<input.length; ++i) {
    	var current = input[i];
    	for (var j=0; j<current.length; ++j)
       		flattened.push(current[j]);
	}
	return flattened;
}
 
async.map([1,2,3,10], getClassEventsForPage, function(err, results){
	// TODO: This must be implemented
	flattened = flatten_fast(results);    
	console.log(JSON.stringify(flattened, undefined, 4));
});
