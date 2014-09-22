rest = require 'restler'

getResp = (url) ->
  rest.get(url).on 'complete', (res) ->
    console.log res

getResp 'https://api.github.com/repos/CSCI-4830-002-2014/challenge-week-1/forks'

