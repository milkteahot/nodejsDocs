const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Message</title></head>');
        res.write('<body><h1>Hello! Nice to meet you.</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Message</title></head>');
        res.write('<body><h1>Hello! Nice to meet you.</h1>');
        res.write('<ul><li>Kelly</li><li>Mark</li><li>Lauren</li><li>Andrew</li></ul>')
        res.write('</body></html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
}

module.exports = requestHandler;