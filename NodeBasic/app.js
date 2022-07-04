// import { createServee } from 'http';

// http.createServer();


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type = "text"  name="message"> <button type = "submit" >Submit</button></button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunks) => {
            console.log(chunks);
            body.push(chunks);
        });
        /*
            return statement here wiats for the completion of the code .
            Else the code below is executed write after this since it a asynchronous method that runs in the future.
        */
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            //fs.writeFileSync('message.txt', message);
            /*
                This simply is the synchronized statement that waits for the file-things to be complete and then runs other code.
                When working for a files with thousands of megabytes this code waits for the process and takes a longer time.
                So we must be sure what the file we are working on.

            */
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);