// Brian Newsom
// Challenge 7: Use similar methodology to hackathon to get 10 pages of course events.

var rest = require("restler");
var async = require("async");
  
function getEvents(i, callback) {
	var page = "?page=" + i;
	rest.get('https://api.github.com/orgs/CSCI-4830-002-2014/events' + page).on('complete', function(res) {
	if (res instanceof Error)  {
		console.log('Error: ', res.message);
		this.retry(1000);
	}
	else {
		console.log(res);
	}
	});
};
 
// [ [a,a,a], [b,b,b], ... ] -> [a,a,a,b,b,b, ... ]
function flatten_slow(input){	
    return input.reduce(function(a, b) {
    	return a.concat(b);
	}, []);
}
 
async.map([1,2,3,4,5,6,7,8,9,10], getEvents, function(err, results){
	flattened = flatten_slow(results);    
	console.log(JSON.stringify(flattened, undefined, 4));
});