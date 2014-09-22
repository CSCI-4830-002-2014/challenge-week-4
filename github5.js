// Adrian Chen
// Challenge 5

var rest = require('restler');

rest.get('https://api.github.com/repos/peymanmortazavi/hackathon-accesslog/stats/contributors').on('complete', function(result) {
	if(result instanceof Error){
		console.log(result.message);
		this.retry(1000);
	}
	else{
		console.log(result);
	}
});
