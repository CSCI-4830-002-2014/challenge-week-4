var rest = require('restler');
var options = "?state=closed";
 
rest.get('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-1/pulls' + options).on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(1000); // try again after 1 sec
  } else {
    console.log(result);
  }
});
