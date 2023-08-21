const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  index(request, response) {
    // Listar todos os contatos
    const contacts = ContactRepository.findAll();
    response.json(contacts); // Send the response in JSON format
  }

  show() {
    // Obter um contato
  }

  store() {
    // Criar um contato
  }

  update() {
    // Editar um contato
  }

  delete() {
    // Remover um contato
  }
}

// Singleton pattern in NodeJs, we export the same instance of the class
module.exports = new ContactController();
