const http = require('http');
const fs = require('fs');

// console.log(process.env);

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const onRequest = (request, response) => {
    console.log(request.url);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(index);
    response.end();
};

http.createServer(onRequest).listen(port, () => {
    console.log(`server listening on port ${port}`);
});
