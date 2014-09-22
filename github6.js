var rest = require('restler');
var postTitle = { 
                 "title" : "IssueChallenge4",
                }
var login = {
              "username" : "LoganBates",
              "password" : "Filler"
            }

rest.postJson('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues', postTitle, login).on('complete', function(results) {
  if (results instanceof Error) {
    console.log('Error:', results.message);
    this.retry(5000);
  } else {
    console.log(results);
  }
});