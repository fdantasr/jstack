/* eslint-disable import/no-extraneous-dependencies */

const { v4 } = require('uuid');

let contacts = [
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

  deleteById(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter(
        // eslint-disable-next-line function-paren-newline
        (contactselected) => contactselected.id !== id,
      );
      resolve();
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contactselected) => contactselected.email === email),
      );
    });
  }

  create({ name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }
}
module.exports = new ContactRepository();
