
// TODO:

var rest = require('restler');

rest.get('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-1/pulls?state=closed').on('complete', function(data) {
  console.log(data); // auto convert to object
});