var restler = require('restler');

restler.get('https://api.github.com/repositories').on('complete', function(publicRepos) {
  if (publicRepos instanceof Error) {
    console.log('Error:', publicRepos.message);
    this.retry(500);
  } 
  else {
    console.log(publicRepos);
  }
});

