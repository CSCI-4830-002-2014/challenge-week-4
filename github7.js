var GitHubApi = require("github");
var async = require("async");
 
var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});
 
function getClassEventsForPage(i, callback){
	github.repos.getFromOrg({
	    org:"CSCI-4830-002-2014",
	    page: i
	}, callback);
};
 
// [ [a,a,a], [b,b,b], ... ] -> [a,a,a,b,b,b, ... ]
function flatten_fast(input){	
    return input.reduce(function(a, b) {
    	return a.concat(b);
	}, []);
}
async.map([1,2,3,10], getClassEventsForPage, function(err, results){
 
 	flattened = flatten_fast(results);    
	
	console.log(JSON.stringify(flattened, undefined, 10));
});