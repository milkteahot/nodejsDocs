var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function(request, response) {
  var _url = request.url;
  
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var title = queryData.id;
//   console.log(url.parse(_url, true));

  if(pathname === '/') {
      if(queryData.id === undefined) {
        var title = "Welcome";
        var description = "Hello, Node.js";
        var template = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>WEB1-${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=Javascript">Javascript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200);
        response.end(template);
      }
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err,description){
            var template = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>WEB1-${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=Javascript">Javascript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200);
        response.end(template);
        })
        
  } else {
    response.writeHead(404);
    response.end('Not Found');
  }
  
  
});

app.listen(3000);
console.log('port:3000')