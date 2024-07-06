// Create web server
// Create a web server that listens on port 3000 and serves the comments.json file to GET requests to /comments. Use the fs module to read the file and the JSON.parse() function to parse it. Use the JSON.stringify() function to convert the comments object to a JSON-formatted string.

const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});