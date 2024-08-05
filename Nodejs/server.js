const http = require('http');

// First server
const server1 = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Server 1\n');
});

// Second server
const server2 = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Server 2\n');
});

// Start the servers on different ports
server1.listen(3000, () => {
  console.log('Server 1 start at http://localhost:3000');
});

server2.listen(4000, () => {
  console.log('Server 2 start at http://localhost:4000');
});