// TODO:

var rest = require('./restler');

var data = {
	"title": "This is Jose Vieitez",
	"body" : "I ate cereal for breakfast today."
};
var options = {
	username: 'jvieitez',
  	password: 'INSERT PASSWORD',
 
};

rest.postJson('https://api.github.com/repos/csci-4830-002-2014/challenge-week-3/issues', data, options).on('complete', function(data, response) {
  
});