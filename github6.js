// Brian Newsom
// Challenge 6: Create issue from restler node.

var rest = require('restler');
var data = {
    'title': 'Challenge 6',
    'body': 'I ate breakfast this time.'
  };
var options = {
	  username: 'BrianNewsom',
	  password: '<PASSWORD>'
  };
rest.postJson('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues', data,options).on('complete', function(res) {
  	if (res instanceof Error)  {
		console.log('Error: ', res.message);
		this.retry(1000);
	}
	else {
		console.log(res);
	}
});