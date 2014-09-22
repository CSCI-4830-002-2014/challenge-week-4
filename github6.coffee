rest = require 'restler'

data =
  title: 'Test Issue'

options =
  username: 'indiesquidge'
  password: '<password>'

getResp = (url) ->
  rest.postJson(url,data,options).on 'complete', (res) ->
    console.log res

getResp 'https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-4/issues', data, options
