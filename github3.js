var restler = require('restler');

restler.get('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-1/forks').on('complete', function(forks) {
  if (forks instanceof Error) {
    console.log('Error:', forks.message);
    this.retry(5000);
  } 
  else {
    console.log(forks);
  }
});