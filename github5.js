var restler = require('restler');

restler.get('https://api.github.com/repos/indiesquidge/hackathon-accesslog/stats/contributors' ).on('complete', function(repos) {
  if (repos instanceof Error) {
    console.log('Error:', repos.message);
    this.retry(5000);
  } 
  else {
    console.log(repos);
  }
});