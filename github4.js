var restler = require('restler');
var request = "state=closed"

restler.get('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-1/pulls?' + request ).on('complete', function(closedPulls) {
  if (closedPulls instanceof Error) {
    console.log('Error:', closedPulls.message);
    this.retry(500);
  } 
  else {
    console.log(closedPulls);
  }
});

