const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    fs.readFile('server2.html', (err, data)=>{
        if(err) {
            throw err;
        }
        res.end(data);
    });
}).listen(8082, () => {
    console.log('listening 8082 hello');
});