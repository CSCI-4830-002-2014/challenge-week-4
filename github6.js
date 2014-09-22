var rest = require('restler');

rest.post('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues', {
  username: 'ianks',
  password: process.env.GITHUB_PW,
  data: JSON.stringify({ "title": "Ian KS issue" })
}).on('complete', function(data, response) {
  console.log(response);
});
