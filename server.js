var http = require('http');

http.createServer(function (req, res) {
    console.log('logs go here!!');
    console.error('errors go here!!');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world!!!');

    
}).listen(process.env.PORT || 8080);