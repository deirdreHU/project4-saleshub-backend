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
  }
});

UserModel.hasMany(ContactModel, {foreignKey: 'assignedTo'});

ContactModel.belongsTo(UserModel, {foreignKey: 'assignedTo', targetKey: 'userId'});

UserModel.sync();

module.exports = {
  UserModel
}
