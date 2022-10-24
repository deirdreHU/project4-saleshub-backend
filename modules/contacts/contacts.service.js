const {ContactModel} = require("./contacts.model");
const {UserModel} = require("../users/users.model");
const {NotesModel} = require("../notes/notes.model");
const {Op} = require("sequelize");
const {DealsModel} = require("../deals/deals.model");


class ContactsService {
  constructor() {
  }

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
        model: UserModel,
      }, {
        model: NotesModel,
        as: 'notes'
      }]
    });
  }

  async queryContacts(keyword, assignedTo, lifeCycleStage) {
    const where = {
      [Op.or]: [
        {
          name: {
            [Op.like]: '%' + keyword + '%'
          }
        },
        {
          email: {
            [Op.like]: '%' + keyword + '%'
          },
        },
        {
          phone: {
            [Op.like]: '%' + keyword + '%'
          },
        }
      ]
    };
    if (assignedTo.length > 0) {
      where.assignedTo = {
        [Op.in]: assignedTo
      }
    }
    if (lifeCycleStage.length > 0) {
      where.lifeCycleStage = {
        [Op.in]: lifeCycleStage
      }
    }
    return ContactModel.findAll({
      include: [{
        model: UserModel,
      }, {
        model: NotesModel,
        as: 'notes'
      }],
      where: where
    })
  }

  async getContact(contact_id) {
    return ContactModel.findOne({
      include: [{
        model: UserModel
      }, {
        model: NotesModel,
        as: 'notes',
        include: [UserModel]
      }, {
        model: DealsModel,
        as: 'deals',
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
