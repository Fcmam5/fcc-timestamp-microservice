var express = require('express')
var app = express()

app.get('/:timestamp', function (req, res) {
  res.send('Hello ! '+req.params.timestamp)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
