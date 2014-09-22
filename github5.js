var rest = require('restler');

rest.get('https://api.github.com/repos/indiesquidge/hackathon-accesslog/stats/contributors').on('complete', function(data) {
  console.log(data);
});
