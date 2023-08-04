/* Create, Read, Update, Delete */

/*shorthand method syntax at ES6.
The old way to do this would be:
const userController = {
  listUsers: function () {
    // ...
  },
*/
const users = require('../mocks/users')

module.exports = {
  listUsers(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(
      JSON.stringify(users)
    )
  }
}