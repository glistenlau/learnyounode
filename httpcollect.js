var http = require('http');
http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  var count = 0;
  var ans = ""
  response.on('data', function(data) {
    count += data.length;
    ans += data;
  })

  response.on('end', function() {
    console.log(count);
    console.log(ans);
  })
})
