var GitHubApi = require("github");
var async = require("async");
var rest = require('restler');

var github = new GitHubApi({
  version: "3.0.0",
  timeout: 1000
});

function getClassEventsForPage(i){
  rest.get('https://api.github.com/orgs/CSCI-4830-002-2014/events?page=' + i).on('complete', function(result){
    console.log(result);
  });
};
  /*
  github.events.getFromOrg({
    org: "CSCI-4830-002-2014",
    page: i
  }, callback);

};
*/
// [ [a,a,a], [b,b,b], ... ] -> [a,a,a,b,b,b, ... ]
function flatten_fast(input){
  return input.reduce(function(a, b) {
    return a.concat(b);
  }, []);
}

async.map([1,2,3,4,5,6,7,8,9,10], getClassEventsForPage, function(err, results){
  flattened = flatten_fast(results);
  console.log(JSON.stringify(flattened, undefined, 4));
});
