var rest = require('restler');

var getResp = function(url){
  rest.get(url).on('complete', function(publicRepos){
    console.log(publicRepos);
  });
};

getResp('https://api.github.com/repositories');
