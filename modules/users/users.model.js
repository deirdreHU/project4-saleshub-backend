const {getSequelize} = require("../../db");
const {DataTypes} = require("sequelize");
const {ContactModel} = require("../contacts/contacts.model");

const sequelize = getSequelize();

const UserModel = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  username: {
    type: DataTypes.STRING,
  },

  passwordHash: {
    type: DataTypes.STRING
  },

  email: {
    type: DataTypes.STRING
  }, 
  
  companyId: {
    type: DataTypes.STRING
  },

  isAdmin: {
    type: DataTypes.BOOLEAN
  }

});


module.exports = {
  UserModel
}
