var restler = require('restler');
//this makes the json that contains our parameters to post. 
var params = {
	"title" : "Test Issue",
	"username": "antsankov",
	"password": "Vistadelor0"
}
restler.postJson('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues',params).on('complete', function(repos) {
  if (repos instanceof Error) {
    console.log('Error:', repos.message);
    this.retry(500);
  } 
  else {
    console.log(repos);
  }
});