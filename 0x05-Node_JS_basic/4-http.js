const { createServer } = require('http');

const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
  res.end();
}).listen(port);

module.exports = app;
