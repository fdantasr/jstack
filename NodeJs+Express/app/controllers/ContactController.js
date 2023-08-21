class ContactController {
  index(request, response) {
    // Listar todos os contatos
    response.send('Send from ContactController');
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
