rest  = require 'restler'
async = require 'async'

flatten = (input) ->
  flattened = []
  i = 0
  while i < input.length
    current = input[i]
    j = 0
    while j < current.length
      flattened.push current[j]
      ++j
    ++i
  flattened

classEvents = (url, i) ->
  rest.get(url + i).on 'complete', (res) ->
    console.log res

classEvents 'https://api.github.com/orgs/csci-4830-002-2014/events?page='

async.map [1..10], classEvents, (err, results) ->
  flattened = flatten(results)
  console.log JSON.stringify(flattened, undefined, 10)
