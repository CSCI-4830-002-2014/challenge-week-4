// Adrian Chen
// Challenge 1

var rest = require('restler');

rest.get('https://api.github.com/repositories').on('complete', function(result){
	if(result instanceof Error){
		console.log(result.message);
		this.retry(1000);
	}
	else{
		console.log(result);
	}
});
