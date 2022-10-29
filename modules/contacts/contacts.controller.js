const {ContactsService} = require("./contacts.service");

class ContactsController{
  
  constructor() {}

  async queryContacts(req, res) {
    try {
      let {keyword = '', assignedTo = '', lifeCycleStage = ''} = req.query;
      const contacts = await ContactsService.queryContacts(
        keyword,
        assignedTo.split(','),
        lifeCycleStage.split(',')
      );
      res.status(200).json(contacts);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async createContact(req, res) {
    try {
      const contact = req.body;
      await ContactsService.createContact(contact);
      res.status(201).send();
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async deleteContact(req, res) {
    try {
      const {contact_id} = req.params;
      await ContactsService.deleteContact(contact_id);
      res.status(200).send();
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async updateContact(req, res) {
    try {
      const {contact_id} = req.params;
      const contact = req.body;
      await ContactsService.updateContact(contact_id, contact);
      res.status(200).send();
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async getContacts(req, res) {
    try {
      let {keyword = '', assignedTo = '', lifeCycleStage = ''} = req.query;
      assignedTo = assignedTo.split(',');
      lifeCycleStage = lifeCycleStage.split(',');
      assignedTo = assignedTo.filter(item => Boolean(item)).map(item => Number(item));
      lifeCycleStage = lifeCycleStage.filter(item => Boolean(item));
      const contacts = await ContactsService.queryContacts(
        keyword,
        assignedTo,
        lifeCycleStage
      );
      res.status(200).json(contacts);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async getContact(req, res) {
    try {
      const {contact_id} = req.params;
      const contact = await ContactsService.getContact(contact_id);
      res.status(200).json(contact);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async searchContact(req, res) {
    try {
      const { keyword = '', assignedTo = '', lifeCycleStage = '' } = req.query;
      let key = 'name';
      if (keyword.includes('@')) {
        key = 'email';
      } else if (!/[a-zA-Z]/.test(keyword)) {
        key = 'phone';
      }
      const contacts = await ContactsService.searchContacts(key, keyword, assignedTo, lifeCycleStage);
      res.status(200).json(contacts);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = {
  ContactsController: new ContactsController()
}
