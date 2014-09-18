var rest = require('restler');

rest.get('https://api.github.com/orgs/CSCI-4830-002-2014/repos').on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(1000); // try again after 1 sec
  } else {
    console.log(result);
  }
});
