const http = require('http');

// Create a server object with an anonymous function
const server = http.createServer((request, response) => {

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<h1>Hello World!</h1>');
});

server.listen(3000, () => console.log('🔥 Sever started at http://localhost:3000'))

// Emitted when the server starts listening
server.addListener('request', (request, response) => {  
  console.log('Request received');
});

// Emitted when the server closes
server.addListener('close', () => {
  console.log('Server closed');
});

//Se eu usar o nodemon, ele faz o servidor reiniciar automaticamente quando o código é alterado