rest = require 'restler'

getResp = (url) ->
  rest.get(url).on 'complete', (res) ->
    console.log res

getResp 'https://api.github.com/repositories'
