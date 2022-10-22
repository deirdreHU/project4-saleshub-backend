const {getSequelize} = require("../../db");
const {DataTypes, NOW, Deferrable} = require("sequelize");
const {UserModel} = require("../users/users.model");

const sequelize = getSequelize();

const ContactModel = sequelize.define('Contact', {
  contactId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  assignedTo: {
    type: DataTypes.INTEGER,
    references: {
      model: UserModel,
      key: 'userId',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  lifeCycleStage: {
    type: DataTypes.STRING
  },
  country: {
    type: DataTypes.STRING
  }
})

// ContactModel.sync();


module.exports = {
  ContactModel
}
