var restler = require('restler');

restler.get('https://api.github.com/orgs/CSCI-4830-002-2014/repos').on('complete', function(classRepos) {
  if (classRepos instanceof Error) {
    console.log('Error:', classRepos.message);
    this.retry(500);
  } 
  else {
    console.log(classRepos);
  }
});
