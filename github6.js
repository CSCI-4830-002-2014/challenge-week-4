rest = require('restler')


var data = {
"title": "This is Michael Fyk",
"body": "New issue"	
}
rest.postJson('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-3/issues', data, {
	"username": "thefyk",
	"password": "pikle3310"
}
	).on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    console.log(result);
  }
});
