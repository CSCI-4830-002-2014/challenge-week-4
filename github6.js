var rest = require('restler');
var options = {
  "title": "Test issue"  
}
rest.post('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues?title=Test1').on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(1000); // try again after 1 sec
  } else {
    console.log(result);
  }
});
