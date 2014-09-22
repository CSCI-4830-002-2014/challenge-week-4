var rest = require('restler');

rest.get('https://api.github.com/repositories').on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(5000);
  } else {
    console.log(result);
  }
});