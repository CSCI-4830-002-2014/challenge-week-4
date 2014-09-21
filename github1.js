var restler = require('restler');

restler.get('https://api.github.com/repositories').on('complete', function(data){
	console.log(data);
});