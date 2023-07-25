// Create web server
var http = require("http");
// Create file system object
var fs = require("fs");
// Create URL parser
var url = require("url");
// Create query string parser
var qs = require("querystring");
// Create server
http.createServer(function(request, response) {
    // Get request URL
    var requestURL = url.parse(request.url);
    // Get pathname
    var pathname = requestURL.pathname;
    // Get query string
    var query = requestURL.query;
    // Log pathname
    console.log(pathname);
    // Log query
    console.log(query);
    // Log request method
    console.log(request.method);
    // Log request headers
    console.log(request.headers);
    // Log request trailers
    console.log(request.trailers);
    // Log request HTTP version
    console.log(request.httpVersion);
    // Log request URL
    console.log(request.url);
    // Log request body
    console.log(request.body);
    // Log request trailers
    console.log(request.trailers);
    // Log request raw headers
    console.log(request.rawHeaders);
    // Log request raw trailers
    console.log(request.rawTrailers);
    // Log request complete
    console.log(request.complete);
    // Log request aborted
    console.log(request.aborted);
    // Log request connection
    console.log(request.connection);
    // Log request client
    console.log(request.client);
    // Log request socket
    console.log(request.socket);
    // Log request httpVersionMajor
    console.log(request.httpVersionMajor);
    // Log request httpVersionMinor
    console.log(request.httpVersionMinor);
    // Log request upgrade
    console.log(request.upgrade);
    // Log request body
    console.log(request.body);
    // Log request trailers
    console.log(request.trailers);
    // Log request raw headers
    console.log(request.rawHeaders);
    // Log request raw trailers
    console.log(request.rawTrailers);
    // Log request complete
    console.log(request.complete);
    // Log request aborted
    console.log(request.aborted);
    // Log request connection
    console.log(request.connection);
    // Log request client
    console.log(request.client);
    // Log request socket
    console.log(request.socket);
    // Log request httpVersionMajor
    console.log(request.httpVersionMajor);
    // Log request httpVersionMinor
    console.log(request.httpVersionMinor);
    // Log request
    console.log(request);
    // Log response
    console.log(response);
    // Log response headers
    console.log(response.headers);
    // Log response trailers
    console.log(response.trailers);
    // Log response finished
    console.log(response.finished);
    // Log response connection
    console.log(response.connection);
    // Log response socket
    console.log(response.socket);
    // Log response statusCode
    console.log(response.statusCode);
    // Log response statusMessage
    console.log(response.statusMessage);
    // Log response writable
    console.log(response.writable);
    // Log response writableEnded
    console.log(response.writableEnded);
    // Log response writableFinished
    console.log(response.writableFinished);
    // Log response writableHighWaterMark
    console.log(response.writableHighWaterMark);
    // Log response writableLength
    console.log(response.writableLength);
    // Log response writableObjectMode
    console.log(response.writableObjectMode);
    // Log response writableCorked
    console.log(response.writableCorked);
    // Log response writableLength
    console.log(response.writableLength);
    // Log response writableObjectMode
    console.log(response.writableObjectMode);
    // Log response writableCorked
    console.log(response.writableCorked);
    // Log response writableFinished
    console.log(response.writableFinished);
    // Log response writableHighWaterMark
    console.log(response.writableHighWaterMark);
    // Log response writableLength
    console.log(response.writableLength);
    // Log response writableObjectMode
    console.log(response.writableObjectMode);
}).listen(8080);
// Log message
console.log("Server running at http://localhost:8080/");
// Log message
console.log("Press Ctrl+C to shutdown server");
// Log message
console.log("Press Ctrl+C to shutdown server");
// Log message
console.log("Press Ctrl+C to shutdown server");

