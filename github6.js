var rest = require('restler');

rest.postJson('https://api.github.com/repos/CSCI-4830-002-2014/pre-class-survey/issues', 
	{"title":"Challenge 6", "body":"Test post, carry on."}, 
	{username: "Irfann1", password:"Volcaniosis1"}).on('success', 
	function(result){

  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    console.log(result);
  }
});