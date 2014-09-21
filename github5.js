var restler = require("restler");

restler.get('https://api.github.com/repos/LoganBates/hackathon-accesslog/stats/contributors').on('complete', function(data) {
	console.log(data);
});