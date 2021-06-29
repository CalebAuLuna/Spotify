var http = require('http');



http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var url = req.url;

  if(url === '/thisiswhatithastobe'){
      res.write('You did it man');
      res.end();
  }else{
      res.end();
  }

}).listen(8000); var http = require('http');

console.log('Server running...');