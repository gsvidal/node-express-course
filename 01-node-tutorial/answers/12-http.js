const {createServer} = require('http')
const port = 3000;

const server = createServer((req, res) => {
  console.log(res);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World Gonza!',
  }));
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});