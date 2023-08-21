const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os contatos
    // Request é um objeto que contém todas as informações da requisição
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
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

  async store(request, response) {
    const { name, email, phone, category_id } = request.body;
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    const contactExists = await ContactRepository.findByEmail(email);
    if (contactExists) {
      return response
        .status(400)
        .json({ error: 'This Email is alredy in use' });
    }
    const contact = await ContactRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
  }

  async update(request, response) {
    // Atualizar um contato
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;
    const contactExists = await ContactRepository.findById(id);
    if (!contactExists) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const emailExists = await ContactRepository.findByEmail(email);
    if (emailExists && emailExists.id !== id) {
      return response
        .status(400)
        .json({ error: 'This Email is alredy in use' });
    }

    const contact = await ContactRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });
    response.json(contact);
  }

  async delete(request, response) {
    // Remover um contato
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);
    if (!contact) {
      return response
        .status(404)
        .json({ error: 'Contact not found, try another { id }' });
    }
    await ContactRepository.deleteById(id);
    // 204: No content
    response.sendStatus(204);
  }
}

// Singleton pattern in NodeJs, we export the same instance of the class
module.exports = new ContactController();
