var http = require('http');
var url = require('url');

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixTime(time) {
  return {
    unixtime: time.getTime()
  }
}

var server = http.createServer(function (req, res) {
  var parseUrl = url.parse(req.url, true)
  var time = new Date(parseUrl.query.iso)
  var result

  if (req.url.pathname === "/api/parsetime") {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(parseTime(time)))
  } else if (req.url.pathname === "/api/unixtime") {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(unixtime(time)))
  }
})

server.listen(process.argv[2])
