const http = require('http');

http.createServer((req,res)=>{
    res.write('<h1>hello world!</h1>');
    res.end('server hi');
}).listen(8080, ()=> {
    console.log('8080 port listening');
})

