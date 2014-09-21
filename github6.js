var rest = require('restler');

var parameters = {
	"username":"JoshFerge",
	"password":"Elkystarcraft9!"
}

var issuetitle = {
	title:"JFerge Issue"
}

rest.postJson('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues',issuetitle,parameters).on('complete', function(result) {



  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    console.log(result);
  }
});

