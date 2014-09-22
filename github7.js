var rest = require('restler');
var async = require('async');

function events(i, callback){
	rest.get('https://api.github.com/orgs/csci-4830-002-2014/events?page=' + i).on('complete', function(result) {

		if(result instanceof Error){
			console.log(result.message);
			this.retry(500);
		}
		else{
			console.log(result);
		}
	});
};

function flatten(input){
	
	return input.reduce(function(a,b) {
		return a.concat(b);

	}, []);
}

async.map([1,2,3,4,5,6,7,8,9,10],events, function(err, results){
	flat = flatten(results);
	console.log(JSON.stringify(flat, undefined, 4));
});