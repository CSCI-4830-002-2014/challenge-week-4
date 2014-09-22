

// TODO:

var rest = require('restler');

var async = require("async");

function restle_events(){
rest.get('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues').on('complete', function(data) {
  console.log(data); // auto convert to object
});
}

function flatten_fast(input){
  return input.reduce(function(a, b) {
    return a.concat(b);
  }, []);
}

async.map([1,2,3,4,5,6,7,8,9,10], restle_events, function(err, results){
  flattened = flatten_fast(results);
  console.log(JSON.stringify(flattened, undefined, 4));
});