var rest = require('restler');
 
rest.get('https://api.github.com/repos/ianks/hackathon-3/stats/contributors').on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(1000); // try again after 1 sec
  } else {
    console.log(result);
  }
});
