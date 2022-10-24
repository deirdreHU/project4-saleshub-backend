const {ContactsService} = require("./contacts.service");

class ContactsController{
  constructor() {}
  async queryContacts(req, res) {
    let {keyword = '', assignedTo = '', lifeCycleStage = ''} = req.query;
    const contacts = await ContactsService.queryContacts(
      keyword,
      assignedTo.split(','),
      lifeCycleStage.split(',')
    );
    res.status(200).json(contacts);
  }

  async createContact(req, res) {
    const contact = req.body;
    await ContactsService.createContact(contact);
    res.status(201).send();
  }

  async deleteContact(req, res) {
    const {contact_id} = req.params;
    await ContactsService.deleteContact(contact_id);
    res.status(200).send();
  }

  async updateContact(req, res) {
    const {contact_id} = req.params;
    const contact = req.body;
    await ContactsService.updateContact(contact_id, contact);
    res.status(200).send();
  }

  async getContacts(req, res) {
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
  }

  async getContact(req, res) {
    const {contact_id} = req.params;
    const contact = await ContactsService.getContact(contact_id);
    res.status(200).json(contact);
  }

  async searchContact(req, res) {
    const { keyword = '', assignedTo = '', lifeCycleStage = '' } = req.query;
    let key = 'name';
    if (keyword.includes('@')) {
      key = 'email';
    } else if (!/[a-zA-Z]/.test(keyword)) {
      key = 'phone';
    }
    const contacts = await ContactsService.searchContacts(key, keyword, assignedTo, lifeCycleStage);
    res.status(200).json(contacts);
  }
}

module.exports = {
  ContactsController: new ContactsController()
}
