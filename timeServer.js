var net = require('net')
var date = new Date()
var server = net.createServer(function (socket) {
  socket.write("" + date.getFullYear() +
      "-" + (date.getMonth() + 1) +
      "-0" + date.getDate() +
      " " + date.getHours() +
      ":" + date.getMinutes() + "\n")
  socket.end()
})

server.listen(process.argv[2])
