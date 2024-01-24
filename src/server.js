const http = require('http');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello Server');
  response.end();
};

http.createServer(onRequest).listen(port, () => {
  console.log(`server running on port ${port}`);
});

