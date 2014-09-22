

// TODO:

var rest = require('restler');

rest.get('https://api.github.com/repos/rodenr/hackathon-accesslog/stats/contributors').on('complete', function(data) {
  console.log(data); // auto convert to object
});