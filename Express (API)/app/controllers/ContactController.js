const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os contatos
    const contacts = await ContactRepository.findAll();

    response.json(contacts); // Send the response in JSON format
  }

  async show(request, response) {
    // Obter um contato
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }
    response.json(contact);
  }

  store() {
    // Criar um contato
  }

  update() {
    // Editar um contato
  }

  async delete(request, response) {
    // Remover um contato
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'Contact not found, try another { id }' });
    }
    await ContactRepository.deleteById(id);
    // 204: No content
    response.sendStatus(204);
  }
}

// Singleton pattern in NodeJs, we export the same instance of the class
module.exports = new ContactController();
