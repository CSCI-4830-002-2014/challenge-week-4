
var rest = require('restler');
var data = {
  "title": "Test Issue"
}
var options = {
  "username": "dawsonbotsford",
  "password": "INSERT PASSWORD HERE"
}

  
rest.postJson('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues', data, options).on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(1000); // try again after 1 sec
  } else {
    console.log(result);
  }
});
