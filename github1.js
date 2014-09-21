var rest = require('restler');

rest.get('http://www.google.com').on('complete', function(results) {
  if (results instanceof Error) {
    console.log('Error:', results.message);
    this.retry(5000);
  } 
  else {
    console.log(results);
  }
});