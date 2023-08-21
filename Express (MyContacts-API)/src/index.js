const express = require('express');
const routes = require('../routes');

const app = express();

app.use(express.json()); // To use JSON in the body of the request
app.use(routes);

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});
