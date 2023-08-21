/* eslint-disable import/no-extraneous-dependencies */

const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Felipe Dantas',
    email: 'dantas.contatod@gmail.com',
    phone: '999999999',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Djalma Almeida',
    email: 'djalma.contatod@gmail.com',
    phone: '999999999',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contactselected) => contactselected.id === id));
    });
  }
}

module.exports = new ContactRepository();
