// Restler object
var rest = require('restler');
var url  = require('url');
var fs   = require('fs');

// Github path
var path = '/repos/nfejes/challenge-week-4/issues';
//var path = '/repos/CSCI-4830-002-2014/challenge-week-4/issues';

// OAuth
if (!fs.existsSync('oauth.token')) {
	console.log("Please put your OAuth token for github in the file 'oauth.token'");
	process.exit(1);
}
token = new String(fs.readFileSync('oauth.token')).trim();

// Url 
queryUrl = url.format({
	protocol: 'https',
	host:     'api.github.com',
	pathname: path,
	query:    {"access_token": token}
});

// JSON Data
var jsonData = {
	"title": "Test issue",
	"body": "This is a test issue sent from Node.js.",
};

// Get data
rest.postJson(queryUrl, jsonData).on('complete', function(data, response) {
	console.log(data);
});

