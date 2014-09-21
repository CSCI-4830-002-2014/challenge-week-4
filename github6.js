var pwjs = require('./password.js');
var restler = require('restler');

var auth = {
	"username": "dare599z",
	"password": pwjs.password
}

var params = {
	"title": "Custom Issue",
 }

restler.postJson('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues', params, auth).on('complete', function(repos) {
     console.log(repos);
});