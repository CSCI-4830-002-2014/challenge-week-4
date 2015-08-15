// TODO:
var rest = require('./restler');

rest.get('https://api.github.com/repositories').on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    console.log(result);
  }
});