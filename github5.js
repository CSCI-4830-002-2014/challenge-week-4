// Brian Newsom
// Get contributors list
var rest = require('restler');

rest.get('https://api.github.com/repos/peymanmortazavi/hackathon-accesslog/stats/contributors').on('complete', function(res) {
	if (res instanceof Error)  {
		console.log('Error: ', res.message);
		this.retry(1000);
	}
	else {
		console.log(res);
	}
});