var restler = require('restler');

restler.get('https://api.github.com/repos/nikitavoskoboynik/hackathon-accesslog/stats/contributors' ).on('complete', function(contribute) {
  if (contribute instanceof Error) {
    console.log('Error:', contribute.message);
    this.retry(500);
  } 
  else {
    console.log(contribute);
  }
});
