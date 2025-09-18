const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 49152; // choosing a dynamic port 

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); // send the response in HTML format instead of plain text
  res.end('<h1>Namaste Bharath</h1>'); // custom message that is shown to the user
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
