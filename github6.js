var restler = require('restler');
var data = {
  "title": "Week 4 reslter issue"
}
var options = {
  "username": "jakecharland",
  "password": "PUT PASSWORD HERE"
}  
restler.postJson('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues', data, options).on('complete', function(issueResult) {
  if (issueResult instanceof Error) {
    console.log('Error:', issueResult.message);
    this.retry(1500); 
  } 
  else {
    console.log(issueResult);
  }
});
