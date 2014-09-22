var rest = require('restler');

var jsonData = {"title": "This is Chris Wittenberg", "body": "I ate cereal for breakfast today."};
rest.postJson('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues', jsonData, {'username': ';-)', 'password': ';-)'}).on('complete', function(data) {
  console.log(data)
});

//rest.postJson('https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues', {
  //multipart: true,
  //username: '<my-username>',
  //password: '<my-password>',
  //data: {
    //'title': '<title>',
    //'body': '<body>'
  //}
//}).on('complete', function(data) {
  //console.log(data.audio_url);
//});
