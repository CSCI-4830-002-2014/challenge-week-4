var restler = require('restler');

restler.postJson('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues',{
  //multipart: true,
  username: 'alne4294',
  password: '****',
  data: {
    'title' : 'Testing!',
    'body' : 'Here is the body of my test issue.'
  }
  }).on('complete', function(data) {
  if (data instanceof Error) {
    console.log('Error:', data.message);
    this.retry(5000);
  } 
  else {
    console.log(data);
  }
});