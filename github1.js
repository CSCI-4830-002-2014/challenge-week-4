// TODO:

var rest = require('restler');

rest.get('https://api.github.com/repositories?since=364').on('complete', function(data) {
  console.log(data); // auto convert to object
});