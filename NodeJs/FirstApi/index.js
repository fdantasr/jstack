const http = require('http');
const routes = require('./routes');

// Create a server object with an anonymous function
const server = http.createServer((request, response) => {
  console.log(`Request method:, ${request.method} | Endpoint: ${request.url}`);

  const route = routes.find((routeObj) => (

    routeObj.endpoint === request.url && routeObj.method === request.method
  ));


  if (route) {
    route.handler(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${request.url}`);
  }
  /* if (request.url === '/users' && request.method === 'GET') {
 
     UserController.listUsers(request, response);
 
   } else {
     response.writeHead(404, { 'Content-Type': 'text/html' });
     response.end(`Cannot ${request.method} ${request.url}`);
   }*/

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