var rest = require('restler');



rest.json('https://api.github.com/repos/LoganBates/hackathon-accesslog/stats/contributors').on('complete', function(result) {



  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    console.log(result);
  }
});

