var restler = require('restler');

restler.get('https://api.github.com/repositories').on('complete', function(repos) {
  if (repos instanceof Error) {
    console.log('Error:', repos.message);
    this.retry(500);
  } 
  else {
    console.log(repos);
  }
});