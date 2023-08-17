const http = require('http');
const { URL } =  require('url');
const routes = require('./routes');

// Create a server object with an anonymous function
const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`); //Cria uma nova instância de URL com o endereço da requisição


  console.log(`Request method:, ${request.method} | Endpoint: ${parsedUrl.pathname}}`);

  //Recebe a rota que está iterando passando o endpoint e o método
  const route = routes.find((routeObj) => (
 
    routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method
  ));

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams); //Transforma o objeto em um array de arrays e depois em um objeto novamente
    route.handler(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }

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
