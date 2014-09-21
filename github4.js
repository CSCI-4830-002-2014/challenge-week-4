var rest = require('restler');

rest.get('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-1/pulls', {
	data: {state: closed},
}).on('complete', function(results) {
  if (results instanceof Error) {
    console.log('Error:', results.message);
    this.retry(5000);
  } else {
    console.log(results);
  }
});
