var rest = require('restler');

rest.get('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-1/forks?sort=newest').on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    console.log(JSON.stringify(result));
  }
});