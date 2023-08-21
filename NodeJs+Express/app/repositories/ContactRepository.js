const { uuid } = require('uuid');

const contacts = [
  { id: uuid, name: 'John Doe', email: 'John' },
  { id: uuid, name: 'Jane Doe', email: 'Jane' },
  { id: uuid, name: 'Janice Doe', email: 'Janice' },
  { id: uuid, name: 'Jules Doe', email: 'Jules' },
  { id: uuid, name: 'Jasper Doe', email: 'Jasper' },
];

class ContactRepository {
  findAll() {}
}

module.exports = new ContactRepository();
