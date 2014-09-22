// TODO:
var rest = require('restler');

rest.get('https://api.github.com/repositories').on('complete', function(data) {
	console.log(data[0]);
});
