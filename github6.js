var rest = require('restler');

rest.post('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues', {
	"title": "IssueChallenge4",
	"body": "This morning I had pancakes for breakfast",
	"username" : "LoganBates",
	"password" : "Goes here"
}).on('complete', function(results) {
  if (results instanceof Error) {
    console.log('Error:', results.message);
    this.retry(5000);
  } else {
    console.log(results);
  }
});