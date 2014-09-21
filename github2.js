var rest = require('restler');

rest.get('https://api.github.com/orgs/csci-4830-002-2014/repos').on('complete', function(data) {
  console.log(data);
});
