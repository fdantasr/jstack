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

    const { order } = request.query;

    const sortedUsers = users.sort((a, b) => {
      
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }

      return a.id > b.id ? 1 : -1;

    });
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(
      JSON.stringify(users)
    )
  }
}