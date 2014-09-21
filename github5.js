var rest = require('restler');

rest.get('https://api.github.com/repos/LoganBates/hackathon-accesslog/stats/contributors').on('complete', function(results) {
  if (results instanceof Error) {
    console.log('Error:', results.message);
    this.retry(5000);
  } else {
    console.log(results);
  }
});