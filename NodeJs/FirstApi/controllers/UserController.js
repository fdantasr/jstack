/* Create, Read, Update, Delete */

/*shorthand method syntax at ES6.
The old way to do this would be:
const userController = {
  listUsers: function () {
    // ...
  },
*/
const users = require('../mocks/users');
const { sort } = require('../routes');

module.exports = {
  listUsers(request, response) {
    const { order } = request.query;

    const sortedUsers = users.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }

      return a.id > b.id ? 1 : -1;
    });
    response.snd(200, sortedUsers);
  },
  getUserById(request, response) {
    const { id } = request.params;
    const user = users.find((user) => user.id === Number(id));

    if (!user) {
      return response.send(400, { error: 'User not found' });
    } else {
      response.send(200, user);
    }
  },
};
