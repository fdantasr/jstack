/* eslint-disable import/no-extraneous-dependencies */

const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Felipe Dantas',
    email: 'dantas.contatod@gmail.com',
    phone: '999999999',
  },
];

class ContactRepository {
  findAll() {
    return contacts;
  }
}

module.exports = new ContactRepository();
