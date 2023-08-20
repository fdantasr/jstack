const http = require('http');
const { URL } =  require('url');
const routes = require('./routes');

// Create a server object with an anonymous function
const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`); //Cria uma nova instância de URL com o endereço da requisição
  console.log(`Request method:, ${request.method} | Endpoint: ${parsedUrl.pathname}}`);

  let { pathname } = parsedUrl; //Desestruturação do pathname
  let id = null;

  const splitEndpoint = pathname.split('/').filter(Boolean); //Separa o pathname em um array e remove os espaços vazios
  console.log(splitEndpoint);

  if (splitEndpoint.length > 1) {
  pathname = `/${splitEndpoint[0]}/:id`; //Cria um novo pathname com o endpoint e o id
  id = splitEndpoint[1]; //Atribui o id
  }

  //Recebe a rota que está iterando passando o endpoint e o método
  const route = routes.find((routeObj) => (
 
    routeObj.endpoint === pathname && routeObj.method === request.method
  ));

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams); //Transforma o objeto em um array de arrays e depois em um objeto novamente
    request.params = { id };

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
