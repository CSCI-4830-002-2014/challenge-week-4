rest = require 'restler'

getResp = (url) ->
  rest.get(url).on 'complete', (res) ->
    console.log res

getResp 'https://api.github.com/orgs/CSCI-4830-002-2014/repos'
