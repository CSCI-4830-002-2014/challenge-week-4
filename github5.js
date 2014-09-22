var rest = require('restler');
var async = require("async");


function getClassEventsForPage(i, callback){
	var page = 'https://api.github.com/orgs/CSCI-4830-002-2014/events?page=' + i;
	restler.get(page).on('complete', function(data) {
		console.log(data);
	});
};
 
function flatten(input) {	
	var flattened = [];
	for (var i = 0; i < input.length; ++i) {
		var current = input[i];
		for (var j = 0; j < current.length; j++) flattened.push(current[j]);
	}
return flattened;
}

async.map([1,2,3,4,5,6,7,8,9,10], getClassEventsForPage, function(err, results) {
	flattened = flatten(results);    
	console.log(JSON.stringify(flattened, undefined, 4));
});