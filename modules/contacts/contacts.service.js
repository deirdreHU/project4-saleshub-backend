const {ContactModel} = require("./contacts.model");
const {UserModel} = require("../users/users.model");


class ContactsService{
  constructor() {}

  async createContact(contact) {
    return ContactModel.create(contact);
  }

  async deleteContact(contact_id) {
    return ContactModel.destroy({
      where: {
        contactId: contact_id
      }
    })
  }

  async updateContact(contact_id, data) {
    return ContactModel.update(data, {
      where: {
        contactId: contact_id
      }
    })
  }

  async searchContacts(key, value, assignedTo, lifeCycleStage) {
    return ContactModel.findAll({
      where: {
        assignedTo,
        lifeCycleStage,
        [key]: value
      }
    });
  }

  async getContacts() {
    return ContactModel.findAll({
      include: [{
        model: UserModel
      }]
    });
  }

  async getContact(contact_id) {
    return ContactModel.findOne({
      include: [{
        model: UserModel
      }],
      where: {
        contactId: contact_id
      }
    })
  }
}

module.exports = {
  ContactsService: new ContactsService()
}
