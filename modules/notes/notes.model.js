const {getSequelize} = require("../../db");
const {DataTypes} = require("sequelize");
// const {UserModel} = require("../users/users.model");


const sequelize = getSequelize();

const NotesModel = sequelize.define('Note', {
    noteId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.STRING
    },
    contact: {
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.INTEGER,
    }
});

// NotesModel.sync();

module.exports = {
    NotesModel
}