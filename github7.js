var rest = require('restler');
var async = require('async');

function getClassEventsForPage(i, callback) {

rest.get('https://api.github.com/orgs/csci-4830-002-2014/events?page=' + i).on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    callback = console.log(result);
  }
});
};

function flatten_fast( data ) {
	var flattened = [];
	for ( var i = 0; i < input.length; ++i ) {
		var current = input[i];
		for ( var j = o; j < current.length; ++j ) {
			flattened.push( current[j] );
		}
	}
	return flattened;
}
 
async.map([1,2,3,10], getClassEventsForPage, function(err, results){
	// TODO: This must be implemented
	flattened = flatten_fast(results);    
	console.log(JSON.stringify(flattened, undefined, 4));
});