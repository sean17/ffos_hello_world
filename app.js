var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var fileServer = new static.Server('./');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    });
}).listen(8080);